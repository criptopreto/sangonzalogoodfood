const {BrowserWindow} = require('electron');
const url = require('url');
const path = require('path')
const isDev = require('electron-is-dev');
const {getConnection} = require('./database');

let window

function getUsers() {
    const conn = getConnection();
    return new Promise((res, rej)=>{
        res(conn.task(async t=>{
            let respuesta = [];
            let cat = {};
            const categorias = await t.any("SELECT * FROM public.categoria");
            categorias.map(async categoria=>{
                console.log(categoria);
                const grupo = await t.any("SELECT * FROM public.grupo WHERE id_categoria = $1", categoria.id);
                cat = categoria;
                cat.grupos = grupo;
                respuesta.push(categoria);
            });

            return respuesta
        }));
        rej("Error")
    });
}

function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    window.loadURL(
        url.format({
            pathname: path.join(__dirname, 'public/index.html'),
            protocol: 'file:',
            slashes: true
        })
    );

    if (isDev) window.webContents.openDevTools();
}

window = null;

module.exports = {createWindow, getUsers}

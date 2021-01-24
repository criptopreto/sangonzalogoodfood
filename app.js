const {BrowserWindow} = require('electron');
const url = require('url');
const path = require('path')
const isDev = require('electron-is-dev');
const {getConnection} = require('./database');

let window

async function getUsers() {
    const conn = getConnection();
    const usuarios = await conn.query("SELECT * FROM public.auth_user");
    usuarios.map(usuario=>{
        console.log(usuario.username);
    })
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

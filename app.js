const {BrowserWindow} = require('electron');
const url = require('url');
const path = require('path')
const isDev = require('electron-is-dev');
const ctrlDB = require('./controllers/db.controller');
const router = require('navaid');
const {readConfig} = require('./controllers/config.controller');

let window
/*async function getUsers() {
    const conn = getConnection();
    const categorias = await conn.query("SELECT * FROM public.categoria");
    return new Promise((res, rej)=>{
        res(conn.task(async t=>{
            let respuesta = [];
            let cat = {};
            categorias.map(async categoria=>{
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
*/
function createCategoria(catData) {
    return new Promise((res, rej)=>{
        ctrlDB.createCategoria(catData).then(data=>{
            res(data);
        }).catch(err=>{
            rej(err);
        })
    })
}

function createGrupo(grpData){
    readConfig();
    return new Promise((res, rej)=>{
        ctrlDB.createGrupo(grpData).then(data=>{
            res(data);
        }).catch(err=>{
            rej(err);
        });
    });
}

function getCategorias() {
    return new Promise((res, rej)=>{
        try{

            res(ctrlDB.getCategorias());
        }catch(err){
            rej(err);
        }
    })
}

function getCategoriasAndGrupos(){
    return new Promise((res, rej)=>{
        try{
            res(ctrlDB.getCategoriasAndGrupos());
        }catch(err){
            rej(err)
        }
    })
}

const db = require('./models');


if (isDev){
    db.sequelize.sync({force: true}).then(()=>{
        console.log("DROP");
    });
}else{
    db.sequelize.sync();
}

function setFullScreen(){
    window.setFullScreen(true)
    
}

function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        resizable: false,
        frame: false
    });

    window.menuBarVisible = false;

    //splash.loadURL(`file://${__dirname}/public/splash.html`);
    window.loadFile('public/index.html');

    window.on('closed', function(){
        window = null;
    });
}

window = null;

module.exports = {createWindow, createCategoria, getCategorias, getCategoriasAndGrupos, createGrupo, setFullScreen}

const fs = require('fs');
const path = require('path');

const pathConfig = path.join(__dirname, "..", "sg-config.json");

var config = {
    database: {
        HOST: '10.51.2.92',
        USER: 'sp3consulta',
        PASSWORD: 'SP32020..',
        DB: "sggf",
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
}

exports.isConfig = ()=>{
    return new Promise(async (res,rej)=>{
        await fs.stat(pathConfig, (err, stat)=>{
            if(err) rej(false);
            else res(true)
        });
    });
}

exports.readConfig = async ()=>{
    //comprobar existencia de archivo de configuración
    await fs.readFile(pathConfig, (err, data)=>{
        if (err){ //El archivo de configuración no está creado
        }else{ //El archivo de configuración ya existe
            console.log(data);
            
            config = JSON.parse(data)
        }
    })
}

exports.config;
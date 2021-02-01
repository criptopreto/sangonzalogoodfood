const fs = require('fs');
const path = require('path');

const config = {
    database = {
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

exports.readConfig = ()=>{
    //comprobar existencia de archivo de configuración
    fs.stat(path.join(__dirname, "..", "sg-config.json"), (err, stat)=>{
        if (err){ //El archivo de configuración no está creado
            
        }else{ //El archivo de configuración ya existe

        }
    })
}
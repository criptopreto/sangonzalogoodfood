const pg = require('pg-promise')();

const cn = {
    host: '10.51.2.92',
    port: 5432,
    database: 'postgres',
    user: 'sp3consulta',
    password: 'SP32020..',
    max: 30
}

const db = pg(cn);

function getConnection() {
    return db;
}

module.exports = {getConnection}
module.exports = {
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
};
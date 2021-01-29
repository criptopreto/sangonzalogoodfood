const {Sequelize, DataTypes, DATE } = require('sequelize');

const sequelize = new Sequelize("postgres://sp3consulta:SP32020..@10.51.2.92:5432/sggf")

const Categoria = sequelize.define("categoria", {
    nombre: DataTypes.STRING,
    bebida: DataTypes.BOOLEAN,
    visible: DataTypes.BOOLEAN,
    sort: DataTypes.BOOLEAN,
    color_button: DataTypes.STRING,
    color_text: DataTypes.STRING
});

const Grupo = sequelize.define("grupo", {
    nombre: DataTypes.STRING,
    visible: DataTypes.BOOLEAN,
    sort: DataTypes.INTEGER,
    color_button: DataTypes.STRING,
    color_text: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER
});

const Producto = sequelize.define("producto", {
    nombre: DataTypes.STRING,
    precio: DataTypes.DOUBLE,
    stock: DataTypes.DOUBLE,
    visible: DataTypes.BOOLEAN,
    impuesto: DataTypes.DOUBLE,
    sort: DataTypes.INTEGER,
    color_button: {
        type: DataTypes.STRING,
        defaultValue: "F7E7E7"
    },
    color_text: {
        type: DataTypes.STRING,
        defaultValue: "000000"
    }
    
});

//Las Asociaciones
Categoria.hasMany(Grupo, {
    foreignKey: 'categoriaId'
});
Grupo.belongsTo(Categoria);

module.exports = {sequelize}
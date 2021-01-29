const Grupo = require('./Grupo');

module.exports = (sequelize, Sequelize)=>{
    const Categoria = sequelize.define("categoria", {
        nombre: Sequelize.DataTypes.STRING,
        bebida: Sequelize.DataTypes.BOOLEAN,
        visible: Sequelize.DataTypes.BOOLEAN,
        sort: Sequelize.DataTypes.INTEGER,
        color_button: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: "#F7E7E7"
        },
        color_text: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: "#000000"
        }
    });

    return Categoria;
}
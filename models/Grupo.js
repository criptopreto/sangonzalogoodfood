const Categoria = require('./Categoria');

module.exports = (sequelize, Sequelize)=>{
    const Grupo = sequelize.define("grupo", {
        nombre: Sequelize.DataTypes.STRING,
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

    return Grupo;
}
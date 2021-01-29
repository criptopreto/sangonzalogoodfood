module.exports = (sequelize, Sequelize)=>{
    const Config = sequelize.define("config", {
        restaurantName: Sequelize.DataTypes.STRING,
        telefono: Sequelize.DataTypes.STRING,
        direccionL1: Sequelize.DataTypes.STRING,
        direccionL2: Sequelize.DataTypes.STRING,
        zipCode: Sequelize.DataTypes.STRING
    });

    return Config;
}
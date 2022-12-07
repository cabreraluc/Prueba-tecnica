const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('task', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

    title: {
      type:DataTypes.STRING,
    },
    state:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    },
    number: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
    }
}
)}
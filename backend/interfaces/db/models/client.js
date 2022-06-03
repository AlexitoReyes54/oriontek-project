const {sequelize} = require("../database")
const { DataTypes } = require("sequelize");


const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps:false
  });

module.exports = Client
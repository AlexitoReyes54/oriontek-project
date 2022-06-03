const {sequelize} = require("../database")
const { DataTypes, Deferrable } = require("sequelize");
const Client = require("./client")

const Direction = sequelize.define('Direction', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postal_code: {
        type: DataTypes.STRING,
        allowNull: false
      },

    client_id: {
        type: DataTypes.INTEGER,
        allowNull:false
      }

  }, {
    timestamps:false
  });

module.exports = Direction



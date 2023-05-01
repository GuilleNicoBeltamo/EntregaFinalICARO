const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const UserList = sequelize.define("UserList", {
    generateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nameUser: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: Date.now().toString()
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: Date.now().toString()
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: Date.now().toString()
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: Date.now().toString()
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: Date.now().toString()
    },
  });
  
  module.exports = UserList;
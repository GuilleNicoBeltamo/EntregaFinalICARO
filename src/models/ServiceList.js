const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const ServiceList = sequelize.define("ServiceList", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  module.exports = ServiceList;
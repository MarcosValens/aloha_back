"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class marca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  marca.init(
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      caracteristicas: DataTypes.STRING,
      descuento: DataTypes.INTEGER,
      ambito: DataTypes.STRING,
      imagen: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "marca",
    }
  );
  return marca;
};

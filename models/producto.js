"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  producto.init(
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      caracteristicas: DataTypes.STRING,
      precio: DataTypes.FLOAT,
      descuento: DataTypes.INTEGER,
      ambito: DataTypes.INTEGER,
      imagen: DataTypes.STRING,
      marca_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "producto",
    }
  );
  return producto;
};

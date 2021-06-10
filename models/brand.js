"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    static associate(models) {
      brand.hasMany(models.product);
    }
  }
  brand.init(
    {
      name: DataTypes.STRING,
      tel: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      url: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "brand",
    }
  );
  return brand;
};

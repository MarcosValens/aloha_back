"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    static associate(models) {
      product.hasMany(models.feature);
      product.hasMany(models.composition);
      product.hasMany(models.format);
      product.belongsTo(models.brand);
      product.belongsTo(models.category);
    }
  }
  product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      text_offer: DataTypes.STRING,
      image: DataTypes.STRING,
      brandId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};

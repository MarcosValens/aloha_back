"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class feature extends Model {
    static associate(models) {
      feature.belongsTo(models.product);
    }
  }
  feature.init(
    {
      text: DataTypes.STRING,
      text2: DataTypes.STRING,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "feature",
    }
  );
  return feature;
};

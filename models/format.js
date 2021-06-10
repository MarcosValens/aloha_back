"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class format extends Model {
    static associate(models) {
      format.belongsTo(models.product);
    }
  }
  format.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "format",
    }
  );
  return format;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class composition extends Model {
    static associate(models) {
      composition.belongsTo(models.product);
    }
  }
  composition.init(
    {
      nitrogen: DataTypes.STRING,
      phosphorus: DataTypes.STRING,
      potassium: DataTypes.STRING,
      calcium: DataTypes.STRING,
      magnesium: DataTypes.STRING,
      sulfur: DataTypes.STRING,
      iron: DataTypes.STRING,
      iron_chelates: DataTypes.STRING,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "composition",
    }
  );
  return composition;
};

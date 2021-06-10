"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class subcategory extends Model {
    static associate(models) {
      subcategory.belongsTo(models.category);
    }
  }
  subcategory.init(
    {
      name: DataTypes.STRING,
      categoryID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "subcategory",
    }
  );
  return subcategory;
};

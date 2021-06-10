"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("compositions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nitrogen: {
        type: Sequelize.STRING,
      },
      phosphorus: {
        type: Sequelize.STRING,
      },
      potassium: {
        type: Sequelize.STRING,
      },
      calcium: {
        type: Sequelize.STRING,
      },
      magnesium: {
        type: Sequelize.STRING,
      },
      sulfur: {
        type: Sequelize.STRING,
      },
      iron: {
        type: Sequelize.STRING,
      },
      iron_chelates: {
        type: Sequelize.STRING,
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("compositions");
  },
};

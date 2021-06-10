"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "compositions",
      [
        {
          nitrogen: "0",
          phosphorus: "0",
          potassium: "0",
          calcium: "0",
          magnesium: "0",
          sulfur: "0",
          iron: "0",
          iron_chelates: "0",
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nitrogen: "1",
          phosphorus: "1",
          potassium: "1",
          calcium: "1",
          magnesium: "1",
          sulfur: "1",
          iron: "1",
          iron_chelates: "1",
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("compositions", null, {});
  },
};

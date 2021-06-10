"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "features",
      [
        {
          text: "test",
          text2: "test",
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "test2",
          text2: "test2",
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("features", null, {});
  },
};

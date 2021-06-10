"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "formats",
      [
        {
          name: "2 litros",
          price: 99.2,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "5 gr.",
          price: 22.2,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("formats", null, {});
  },
};

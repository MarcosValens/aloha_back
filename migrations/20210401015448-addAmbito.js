"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("productos", "ambito", Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("ambito");
  },
};

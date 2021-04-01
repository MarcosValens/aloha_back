"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("productos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: true,
        default: null,
      },
      caracteristicas: {
        type: Sequelize.STRING,
        allowNull: true,
        default: null,
      },
      precio: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      descuento: {
        type: Sequelize.INTEGER,
        allowNull: true,
        default: null,
      },
      ambito: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      imagen: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      marca_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "marcas",
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
    await queryInterface.dropTable("productos");
  },
};

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "CBD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sustratos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Macetas y bandejas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Semillas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Instrumentos de medida",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Riego",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Herramientas y accesorios",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tratamiento de olores",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sistemas de cultivos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Invernaderos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iluminación",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Control de clima",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fertilizantes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lucha biológica",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Parafernalia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("brands", null, {});
  },
};

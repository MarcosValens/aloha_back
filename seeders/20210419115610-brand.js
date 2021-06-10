"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "brands",
      [
        {
          name: "PLANT OF LIFE",
          tel: null,
          email: "info@plantoflifeseeds.com",
          address: null,
          url: "https://es.plantoflifeseeds.com",
          description:
            "Productos de CBD de espectro completo, naturales y veganos que no dañan la naturaleza ni la vida silvestre.",
          image: "plantlife-logo.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ROMHEMP",
          tel: "+34645953570",
          email: "clau@cbdweedshop.com",
          address: "C/ Madrid Nº13 Local 7, c.p.:43840, Tarragona, Cataluña",
          url: "https://www.romhemp.com",
          description:
            "Más de 16 años de experiencia en la industria del cáñamo – de campo en estante.",
          image: "romhemp-logo.png",
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

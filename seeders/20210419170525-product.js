"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          name: "SKYWALKER",
          description:
            "Tiene una genética única en Europa que se caracteriza por su aroma equilibrado dulce y terroso en el que destacan toques afrutados.",
          text_offer: null,
          image: "plantlife-logo.png",
          brandId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CANDY KUSH",
          description:
            "TLa especie Candy Kush, también conocida como Kandy Kush, es una especie híbrida de cannabis con dominancia Indica. Esta especie es el resultado de la combinación masiva del famoso OG Kush con Trainwreck. Como su nombre indica, esta especie tiene un sabor dulce y un toque agresivo idéntico al Lemon Kush.",
          text_offer: null,
          image: "candy-kush-plantoflife.jpg",
          brandId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Activity",
      [
        {
          name: "Charla de Coaching I",
          image:
            "https://images.squarespace-cdn.com/content/v1/5d5678fd8d428c0001a2cf7a/1585955243677-NSRX09V9XUUAQ1IL92VZ/icf-coaching-en-casa-colombia.jpg",
          content:
            "Ciclo dictado por el Dr. Maximus Prime, especialista en la temática.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clases de apoyo escolar nivel Primario",
          image:
            "https://escuelaprimaria.net/wp-content/uploads/2019/08/Ejercicios-del-Taller-de-Creatividad-para-Cuarto-de-Primaria.jpg",
          content: "Se dará apoyo de Matemáticas de nivel primario.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Curso de introducción a la carpintería",
          image:
            "https://apollo-virginia.akamaized.net/v1/files/elz8h2tqj9m93-CO/image",
          content:
            "Curso dictado por carpinteros locales abierto a la comunidad.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Activity", null, {});
  },
};

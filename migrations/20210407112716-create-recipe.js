"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("recipes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      instruction: {
        type: Sequelize.TEXT,
      },
      bought: {
        type: Sequelize.INTEGER,
      },
      timeToCook: {
        type: Sequelize.INTEGER,
      },
      totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      totalCalories: {
        type: Sequelize.INTEGER,
      },
      isFavorite: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("recipes");
  },
};

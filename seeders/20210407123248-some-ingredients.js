"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ingredients",
      [
        { createdAt: new Date(), updatedAt: new Date(), title: "rice paper" },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "rice vermicelli",
        },
        { createdAt: new Date(), updatedAt: new Date(), title: "shrimp" },
        { createdAt: new Date(), updatedAt: new Date(), title: "lettuce" },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "rice cuccumber",
        },
        { createdAt: new Date(), updatedAt: new Date(), title: "carrot" },
        { createdAt: new Date(), updatedAt: new Date(), title: "mint" },
        { createdAt: new Date(), updatedAt: new Date(), title: "onion" },
        { createdAt: new Date(), updatedAt: new Date(), title: "ginger" },
        { createdAt: new Date(), updatedAt: new Date(), title: "beef" },
        { createdAt: new Date(), updatedAt: new Date(), title: "shank" },
        { createdAt: new Date(), updatedAt: new Date(), title: "marrow pipe" },
        { createdAt: new Date(), updatedAt: new Date(), title: "mint" },
        { createdAt: new Date(), updatedAt: new Date(), title: "rice noodles" },
        { createdAt: new Date(), updatedAt: new Date(), title: "cilantro" },
        { createdAt: new Date(), updatedAt: new Date(), title: "basil" },
        { createdAt: new Date(), updatedAt: new Date(), title: "bean sprout" },
        { createdAt: new Date(), updatedAt: new Date(), title: "rice flour" },
        { createdAt: new Date(), updatedAt: new Date(), title: "turmeric" },
        { createdAt: new Date(), updatedAt: new Date(), title: "coconut milk" },
        { createdAt: new Date(), updatedAt: new Date(), title: "spring onion" },
        { createdAt: new Date(), updatedAt: new Date(), title: "shallots" },
        { createdAt: new Date(), updatedAt: new Date(), title: "coriander" },
        { createdAt: new Date(), updatedAt: new Date(), title: "perilla" },
        { createdAt: new Date(), updatedAt: new Date(), title: "egg" },
        { createdAt: new Date(), updatedAt: new Date(), title: "pea" },
        { createdAt: new Date(), updatedAt: new Date(), title: "rice" },
        { createdAt: new Date(), updatedAt: new Date(), title: "tomato" },
        { createdAt: new Date(), updatedAt: new Date(), title: "garlic" },
        { createdAt: new Date(), updatedAt: new Date(), title: "pepper" },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "glutinous rice",
        },
        { createdAt: new Date(), updatedAt: new Date(), title: "sesame seeds" },
        { createdAt: new Date(), updatedAt: new Date(), title: "mango" },
        { createdAt: new Date(), updatedAt: new Date(), title: "tofu" },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "vegetarian chicken",
        },
        { createdAt: new Date(), updatedAt: new Date(), title: "red curry" },
        { createdAt: new Date(), updatedAt: new Date(), title: "eggplant" },
        { createdAt: new Date(), updatedAt: new Date(), title: "duck" },
        { createdAt: new Date(), updatedAt: new Date(), title: "lychee" },
        { createdAt: new Date(), updatedAt: new Date(), title: "pineapple" },
        { createdAt: new Date(), updatedAt: new Date(), title: "papaya" },
        { createdAt: new Date(), updatedAt: new Date(), title: "cabbage" },
        { createdAt: new Date(), updatedAt: new Date(), title: "lemongrass" },
        { createdAt: new Date(), updatedAt: new Date(), title: "panko" },
        { createdAt: new Date(), updatedAt: new Date(), title: "kimchi" },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "shitake mushroom",
        },
        { createdAt: new Date(), updatedAt: new Date(), title: "pak choi" },
        { createdAt: new Date(), updatedAt: new Date(), title: "spare rib" },
        { createdAt: new Date(), updatedAt: new Date(), title: "lotus root" },
        { createdAt: new Date(), updatedAt: new Date(), title: "date" },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "mandarin peel",
        },
        { createdAt: new Date(), updatedAt: new Date(), title: "barley" },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "chestnut flour",
        },
        { createdAt: new Date(), updatedAt: new Date(), title: "chestnut" },
        { createdAt: new Date(), updatedAt: new Date(), title: "watermelon" },
        { createdAt: new Date(), updatedAt: new Date(), title: "galia melon" },
        { createdAt: new Date(), updatedAt: new Date(), title: "grass jelly" },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "mantou/mandarin rolls",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "luncheon meat",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "cheddar cheese",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "chicken curry",
        },
        { createdAt: new Date(), updatedAt: new Date(), title: "potato" },
        { createdAt: new Date(), updatedAt: new Date(), title: "green bean" },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "whipped cream",
        },
        { createdAt: new Date(), updatedAt: new Date(), title: "whole milk" },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "gelatin powder",
        },
        { createdAt: new Date(), updatedAt: new Date(), title: "roti paratha" },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Fermented duck eggs",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "pickle ginger",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "lotus seed paste",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ingredients", null, {});
  },
};

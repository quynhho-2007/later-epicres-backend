"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipe.belongsToMany(models.tag, {
        through: "recipeTags",
        foreignKey: "recipeId",
      });
      recipe.belongsToMany(models.ingredient, {
        through: "recipeIngredients",
        foreignKey: "recipeId",
      });
    }
  }
  recipe.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      url: DataTypes.STRING,
      description: DataTypes.TEXT,
      instruction: DataTypes.TEXT,
      bought: DataTypes.INTEGER,
      timeToCook: DataTypes.INTEGER,
      totalPrice: { type: DataTypes.FLOAT, allowNull: false },
      totalCalories: DataTypes.INTEGER,
      isFavorite: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};

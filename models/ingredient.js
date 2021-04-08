"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ingredient.belongsToMany(models.recipe, {
        through: "recipeIngredients",
        foreignKey: "ingredientId",
      });
    }
  }
  ingredient.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "ingredient",
    }
  );
  return ingredient;
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Niek",
          lastName: "vd Linden",
          email: "niek@gmail.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Quynh",
          lastName: "Ho",
          email: "quynh@gmail.com",
          password: "456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Dexter",
          lastName: "vd Linden",
          email: "dexter@gmail.com",
          password: "789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Sammy",
          lastName: "vd Linden",
          email: "sammy@gmail.com",
          password: "101",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

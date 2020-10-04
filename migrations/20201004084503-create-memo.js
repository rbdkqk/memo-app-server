"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("memos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      writer: {
        type: Sequelize.STRING,
      },
      contents: {
        type: Sequelize.STRING,
      },
      // starred: { // 별점 기능을 위한 것인데, 포기함. mysql에서는 안되는 것 같다. (PostgreSQL only.)
      //   type: Sequelize.ARRAY(Sequelize.STRING),
      // },
      is_edited: {
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
    await queryInterface.dropTable("memos");
  },
};

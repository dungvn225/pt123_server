'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      star: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
   
      labelCode: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      attributesId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      categoryCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      overViewId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imagesId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      priceCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      areaCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      provinceCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      priceNumber: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      areaNumber: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('task_inners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task_id:{
        type: Sequelize.INTEGER,
        references:{
          model:'tasks',
          key:'id'
        }
      },
      task_step: {
        type: Sequelize.STRING
      },
      task_info: {
        type: Sequelize.STRING
      },
      task_status: {
        type: Sequelize.ENUM('Important', 'Intermediate', 'Optional')
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
    await queryInterface.dropTable('task_inners');
  }
};
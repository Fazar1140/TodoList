'use strict';

/** @type {import('sequelize-cli').Migration} */

const task = [
  {
    user_id:1,
    task_title:'Ke supermarket',
    task_status:'Important',
    createdAt : new Date(),
    updatedAt : new Date()
  }
]
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('tasks',task,{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

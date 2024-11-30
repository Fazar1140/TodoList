'use strict';

/** @type {import('sequelize-cli').Migration} */

const task_inner = [
  {
    task_id:1,
    task_step:'Beli bumbu',
    task_info:'beli beberapa bumbu masak : garam,lada,paprika',
    task_status:'Important',
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    task_id:1,
    task_step:'beli makanan',
    task_info:'beli daging, makanan instan dan lain lain',
    task_status:'Important',
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    task_id:1,
    task_step:'beli mainan',
    task_info:'beli mainan untuk anak anak',
    task_status:'Optional',
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
      await queryInterface.bulkInsert('task_inners',task_inner,{})
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

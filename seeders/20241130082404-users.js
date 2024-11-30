'use strict';

 

/** @type {import('sequelize-cli').Migration} */


const bcrypt = require('bcryptjs');
const SeedInitial = require('./SeedHelper/SeedInitial');

const SeedHelper = new SeedInitial();

SeedHelper.password('12345678')

const password = SeedHelper.getPassword

const user = [{

  username:'Lee',
  email:'LeeGoldson@gmail.com',
  password:bcrypt.hashSync(password,10),
  createdAt:new Date(),
  updatedAt:new Date()
}]

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
   await queryInterface.bulkInsert('users',user,{})
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

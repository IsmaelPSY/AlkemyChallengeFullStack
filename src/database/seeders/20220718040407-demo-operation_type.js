'use strict';

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
      await queryInterface.bulkInsert('operation_types', [{
        id: '4b9cf66a-66ed-4ceb-ab9c-99fc3ef5ca52',
        name: 'Ingresos'
      }], {});
      await queryInterface.bulkInsert('operation_types', [{
        id: '3455a378-c257-49eb-8c00-7a5896b037bc',
        name: 'Egresos'
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('operation_types', null, {});

  }
};

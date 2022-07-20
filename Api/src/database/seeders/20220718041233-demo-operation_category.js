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
    await queryInterface.bulkInsert('operation_category', [{
      id: 'e3d8f33c-42cb-4727-9d25-e1f3eeab4631',
      name: 'Alimentación'
    }], {});
    await queryInterface.bulkInsert('operation_category', [{
      id: '69c83eeb-1f3d-43d9-b56e-f6e79e2ab8db',
      name: 'Servicios'
    }], {});
    await queryInterface.bulkInsert('operation_category', [{
      id: '758a4277-c21c-4a18-8e53-16dedb419bd8',
      name: 'Personales'
    }], {});
    await queryInterface.bulkInsert('operation_category', [{
      id: '29a17452-9411-438d-8195-d45273ad78e0',
      name: 'Emergencia'
    }], {});
    await queryInterface.bulkInsert('operation_category', [{
      id: '5ba5995b-8fc6-45bf-aec0-6ee6c8499fd6',
      name: 'Trabajo'
    }], {});
    await queryInterface.bulkInsert('operation_category', [{
      id: '24a9dfee-454a-4e39-bd4f-f711f994f632',
      name: 'Otros'
    }], {});
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

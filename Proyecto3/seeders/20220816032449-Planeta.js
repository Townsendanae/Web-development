'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 10; i <1000; i++) {  
      await queryInterface.bulkInsert('Planeta', [{  
          idPlaneta: i,
          nombre: "Planeta "+i,
          diametro: i * 43567123/3,
          periodo_orbita: 123^3 * i,
          periodo_rotacion: i*234 + 12^4,
          gravedad: i * 2.3421
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Planeta', null, {});  
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
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

     await queryInterface.bulkInsert(
       "Flights",
       [
         {
           flightNumber: "Uk 800",
           airplaneId: 1,
           departureAirportId: 1,
           arrivalAirportId: 1,
           arrivalTime: "2023-01-26T16:50:00.000",
           departureTime: "2023-01-26T16:50:00.000",
           price: 6000,
           totalSeats: 300,
           createdAt:new Date(),
           updatedAt:new Date(),
         },
       ],
       {}
     );
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
/**
 * {
 *   flightNumber,
 *  airplaneId ,
 *   departureAirportId,
 *   arrivalAirportId,
 *   arrivalTime,
 *   departureTime,
 *   price
 *   totalSeats -> airplane
 * }
 */
'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Services', [
      {
        nick_name: 'My First Property in Buckhead',
        sq_ft: '3000',
        address: '1 Buckhead RD',
        city: 'Atlanta',
        state: 'GA',
        zipcode: '30324',
        price: '300',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
    )
    await queryInterface.bulkInsert('Orders', [
      {
        completed: true,
        reschedule: false,
        schedule_confirm: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        completed: true,
        reschedule: false,
        schedule_confirm: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        completed: false,
        reschedule: false,
        schedule_confirm: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]
    )
    await queryInterface.bulkInsert('Customers', [{
      first_name: 'John',
      last_name: 'Doe',
      email: 'JohnDoe@John.com',
      // login_name: 'jduser',
      login_password: 'password',
      // phone_number: '1112222',
      // address_line_1: '123 Mars Road',
      // address_line_2: 'Apt# 1D',
      // address_line_3: null,
      // city: 'first city of mars',
      // state: 'Mars',
      // zipcode: '11111',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Bobby',
      last_name: 'Bobs',
      email: 'BobbyBobs@Bobs.com',
      // login_name: 'bbuser',
      login_password: 'password',
      phone_number: '1112222',
      // address_line_1: '424 Mars Road',
      // address_line_2: 'Apt# 2D',
      // address_line_3: null,
      // city: 'second city of mars',
      // state: 'Mars',
      // zipcode: '11112',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      first_name: 'Sam',
      last_name: 'Sammy',
      email: 'SamSammy@sam.com',
      // login_name: 'ssuser',
      login_password: 'password',
      phone_number: '1112222',
      // address_line_1: '923 Mars Road',
      // address_line_2: 'Apt# 5A',
      // address_line_3: null,
      // city: 'third city of mars',
      // state: 'Mars',
      // zipcode: '11113',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('OrderService', [
      {
        customer_id: '1',
        service_id: '1',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
    ]
    )
    return await queryInterface.bulkInsert('CustomerOrder', [
      {
        order_id: '1',
        customer_id: '1',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
    ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Services', null, {})
    await queryInterface.bulkDelete('Order', null, {})
    await queryInterface.bulkDelete('Customer', null, {})
    await queryInterface.bulkDelete('CustomerOrder', null, {})
    await queryInterface.bulkDelete('OrderService', null, {})
  }
};

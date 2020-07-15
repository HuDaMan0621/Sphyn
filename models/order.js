'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    completed: DataTypes.BOOLEAN,
    reschedule: DataTypes.BOOLEAN,
    schedule_confirm: DataTypes.BOOLEAN
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Customer, { through: 'CustomerOrder' }),
    // Order.belongsToMany(models.Services, { through: 'OrderService' })
    Order.belongsTo(models.Services,  { through: 'OrderService' })
  };
  return Order;
};
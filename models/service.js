'use strict';
module.exports = (sequelize, DataTypes) => {
  const Services = sequelize.define('Services', {
    nick_name: DataTypes.TEXT,
    sq_ft: DataTypes.TEXT,
    address: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    zipcode: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {});
  Services.associate = function(models) {
    // Services.belongsToMany(models.Order, { through: 'OrderService' })
    Services.hasOne(models.Order)
  };

  return Services;
};

const Sequelize = require('sequelize');
const SequelizeService = require('../services/sequelize');

const Timeslot = SequelizeService.define(
  'Timeslot', 
  {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    start_at: {
      type: Sequelize.TIME,
      allowNull: false
    },
    end_at: {
      type: Sequelize.TIME,
      allowNull: false
    }
  },
  {
    tableName: 'timeslot',
    underscored: true,
    timestamps: false,
  }
);

Timeslot.associate = function (models) {
  Timeslot.hasMany(models.Booking);
};

module.exports = Timeslot;
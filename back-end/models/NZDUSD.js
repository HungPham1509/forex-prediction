const Sequelize = require('sequelize');
const connection = require('../database/connection');

const NZDUSD = connection.sequelize.define(
    'nzd_usd',
    {
        uuid: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATE
        },
        open: {
            type: Sequelize.FLOAT
        },
        low: {
            type: Sequelize.FLOAT
        },
        high: {
            type: Sequelize.FLOAT
        },
        close: {
            type: Sequelize.FLOAT
        }
    },
    {underscored: true}
);


module.exports = NZDUSD;

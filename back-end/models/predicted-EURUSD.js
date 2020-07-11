const Sequelize = require('sequelize');
const connection = require('../database/connection');

const predicted_EURUSD = connection.sequelize.define(
    'predicted_eur_usd',
    {
        uuid: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATE
        },
        close: {
            type: Sequelize.FLOAT
        }
    },
    {underscored: true}
);


module.exports = predicted_EURUSD;

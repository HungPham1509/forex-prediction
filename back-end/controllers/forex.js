const { v4: uuidv4 } = require('uuid');
const exceljs = require('exceljs');
const EURUSD = require('../models/EURUSD');
const AUDUSD = require('../models/AUDUSD');
const GBPUSD = require('../models/GBPUSD');
const NZDUSD = require('../models/NZDUSD');
const Predicted_EURUSD = require('../models/predicted-EURUSD')
const Predicted_AUDUSD = require('../models/predicted-AUDUSD')
const Predicted_GBPUSD = require('../models/predicted-GBPUSD')
const Predicted_NZDUSD = require('../models/predicted-NZDUSD');
const predicted_AUDUSD = require('../models/predicted-AUDUSD');
const predicted_GBPUSD = require('../models/predicted-GBPUSD');
const predicted_NZDUSD = require('../models/predicted-NZDUSD');
const predicted_EURUSD = require('../models/predicted-EURUSD');

exports.addForex = (req, res, next) => {
    const wb = new exceljs.Workbook();
    
    wb.xlsx.readFile(req.file.path).then(function () {
        const sheet = wb.getWorksheet(1);
       
        for (var i = 731; i < 763; i++) {
            const itemUuid = uuidv4();
            const item = {
                uuid: itemUuid,
                date:  sheet.getRow(i).getCell(1).value,
                close: sheet.getRow(i).getCell(2).value
            }
            predicted_NZDUSD.create(item)
        }
    })
}

exports.getData = (req, res, next) => {
    const type = req.query.f
    if(type == 'EUR-USD') {
        EURUSD.findAll({order: [['Date', 'DESC']]}).then(result => {
            res.status(200).json({
                data: result
            })
        }).catch(error => {
            res.status(500).json({
                error: error
            })
        })
    }
    if(type == 'AUD-USD') {
        AUDUSD.findAll({order: [['Date', 'DESC']]}).then(result => {
            res.status(200).json({
                data: result
            })
        }).catch(error => {
            res.status(500).json({
                error: error
            })
        })
    }
    if(type == 'GBP-USD') {
        GBPUSD.findAll({order: [['Date', 'DESC']]}).then(result => {
            res.status(200).json({
                data: result
            })
        }).catch(error => {
            res.status(500).json({
                error: error
            })
        })
    }
    if(type == 'NZD-USD') {
        NZDUSD.findAll({order: [['Date', 'DESC']]}).then(result => {
            res.status(200).json({
                data: result
            })
        }).catch(error => {
            res.status(500).json({
                error: error
            })
        })
    }
}

exports.getPredictedData = (req, res, next) => {
    const type = req.query.f
    if(type == 'EUR-USD') {
        predicted_EURUSD.findAll({order: [['Date', 'DESC']]}).then(result => {
            res.status(200).json({
                data: result
            })
        }).catch(error => {
            res.status(500).json({
                error: error
            })
        })
    }
    if(type == 'AUD-USD') {
        Predicted_AUDUSD.findAll({order: [['Date', 'DESC']]}).then(result => {
            res.status(200).json({
                data: result
            })
        }).catch(error => {
            res.status(500).json({
                error: error
            })
        })
    }
    if(type == 'GBP-USD') {
        predicted_GBPUSD.findAll({order: [['Date', 'DESC']]}).then(result => {
            res.status(200).json({
                data: result
            })
        }).catch(error => {
            res.status(500).json({
                error: error
            })
        })
    }
    if(type == 'NZD-USD') {
        predicted_NZDUSD.findAll({order: [['Date', 'DESC']]}).then(result => {
            res.status(200).json({
                data: result
            })
        }).catch(error => {
            res.status(500).json({
                error: error
            })
        })
    }
}
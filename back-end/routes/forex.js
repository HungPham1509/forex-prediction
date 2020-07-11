const express = require('express');
const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        const tmp = file.originalname.split('.');   
        if(tmp[tmp.length-1] !== 'xlsx') {
            return cb(new Error('Invalid file type'));
        }
        return cb(null, true);
    }
})

const forexController = require('../controllers/forex');

router.post('/add-forex', upload.single('forexFile'), forexController.addForex);
router.get('/forex', forexController.getData);
router.get('/predicted-forex', forexController.getPredictedData)


module.exports = router;
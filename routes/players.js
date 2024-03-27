var express = require('express');
var router = express.Router();
var playersCtrl = require('../controllers/players')

router.post('/teams/:id/players', playersCtrl.create)

module.exports = router
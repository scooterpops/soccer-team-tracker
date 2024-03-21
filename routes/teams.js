var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams')

// all paths start with /teams

router.get('/new', teamsCtrl.new)

module.exports = router;

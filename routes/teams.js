var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams')

// all paths start with /teams

// GET /teams/new
router.get('/new', teamsCtrl.new)

// POST /teams
router.post('/', teamsCtrl.create)

module.exports = router;

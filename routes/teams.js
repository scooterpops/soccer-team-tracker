var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams')

// all paths start with /teams



// GET /teams
router.get('/', teamsCtrl.index)

// GET /teams/new
router.get('/new', teamsCtrl.new)

// GET /teams/:id
router.get('/:id', teamsCtrl.show)

// serves update page
router.get('/:id/update', teamsCtrl.updatePage)

// POST /teams
router.post('/', teamsCtrl.create)

// DELETE /team
router.delete('/:id', teamsCtrl.remove)

// UPDATE /team
router.put('/:id', teamsCtrl.update)



module.exports = router;

const Team = require('../models/team')

module.exports = {
    new: newTeam,
    create,
    index
};

function newTeam(req, res) {
    res.render('teams/new'), {
        errorMsg: ''
    }
}

async function create(req, res) {
    req.body.homeKitColors = req.body.homeKitColors.trim()
    try {
        await Team.create(req.body)
        res.redirect('teams/new')
    } catch (err) {
        console.log(err)
        res.render('teams/new', {
            errorMsg: err
        })
    }
}   

async function index(req, res) {
    const teams = await Team.find({})
    res.render('teams/index', { teams })
}
const Team = require('../models/team')

module.exports = {
    new: newTeam,
    create,
    index,
    show,
    remove,
    update,
    updatePage
};

async function updatePage(req,res) {
    const team = await Team.findById(req.params.id)
    console.log(team)
    res.render('teams/update', {
        title: 'Team Details',
        team
    })
}

async function update(req,res) {
    await Team.findOneAndReplace({_id:req.params.id}, req.body)
    res.redirect('/teams')
}

async function remove(req,res) {
    await Team.findOneAndDelete(req.params.id)
    res.redirect('/teams')
}

async function show(req, res) {
    const team = await Team.findById(req.params.id)
    res.render('teams/show', {
        title: 'Roster Details',
        team
    })
}

async function index(req, res) {
    const teams = await Team.find({})
    res.render('teams/index', { teams })
}

function newTeam(req, res) {
    res.render('teams/new'), {
        errorMsg: ''
    }
}

async function create(req, res) {
    req.body.homeKitColors = req.body.homeKitColors.trim()
    try {
        await Team.create(req.body)
        res.redirect('teams')
    } catch (err) {
        console.log(err)
        res.render('teams/new', {
            errorMsg: err
        })
    }
}    

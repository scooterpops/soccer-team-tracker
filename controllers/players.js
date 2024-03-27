const Team = require('../models/team')

module.exports = {
    create
}

async function create(req, res) {
    const team = await Team.findById(req.params.id)
    team.players.push(req.body)
    try {
        await team.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/teams/${team._id}`)
    team.save()
}
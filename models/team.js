const mongoose = require('mongoose')

const Schema = mongoose.Schema

const playerSchema = new Schema({
    playerName: {
        type: String
}
})

const teamSchema = new Schema({
    location: String,
    teamName: {
        type: String
    },
    league: String,
    foundingYear: {
        type: Number, 
        default: 1900
    },
    homeKitColors: [String],
    sponsor: String,
    players: [playerSchema]
})


module.exports = mongoose.model('Team', teamSchema)


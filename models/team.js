const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teamSchema = new Schema({
    location: String,
    teamName: String,
    league: String,
    foundingYear: Number,
    homeKitColors: [String],
    sponsor: String
})

module.exports = mongoose.model('Team', teamSchema)


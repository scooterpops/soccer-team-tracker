module.exports = {
    new: newTeam
};

function newTeam(req, res) {
    res.render('teams/new'), {
        errorMsg:''
    }
}
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);

    })

    app.post("/api/friends", function (req, res) {
        var bestBud = {
            name: "",
            photo: "",
            scoreDif: 5
        }

        var userData = req.body
        var userScores = userData.scores

        var totalDif = 0;

        for (var i = 0; i < friends.length; i++) {
            totalDif = 0;

            for (var j = 0; j < 10; j++) {
                totalDif = Math.abs(parseInt(userScores[j] - parseInt(friends[i].scores[j])))
            }

            if (totalDif <= bestBud.scoreDif) {
                bestBud.name = friends[i].name
                bestBud.photo = friends[i].photo
                bestBud.scoreDif = totalDif;
            }
        }
        friends.push(userData)

        res.json(bestBud)
    })

}
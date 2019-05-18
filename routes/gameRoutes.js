const mongoose = require('mongoose');
const handlePlayer = require('../services/handlePlayer');
const Game = mongoose.model('games');

module.exports = app => {
    app.post('/api/newgame', async (req, res) => {
        const { namePlayerOne, namePlayerTwo } = req.body;

        if (!namePlayerOne || !namePlayerTwo) {
            res.status(400).send("Missing information");
        } else {

            try {
                playerOne = await handlePlayer(namePlayerOne);
                playerTwo = await handlePlayer(namePlayerTwo);
               
                const game = await new Game({
                    _playerOne: playerOne.id,
                    _playerTwo: playerTwo.id,
                    _winner: false
                }).save();

                res.send({
                    gameId: game.id,
                    playerOne,
                    playerTwo
                });
            } catch (error) {
                res.status(500).send(error);
            }
        }
    });
};

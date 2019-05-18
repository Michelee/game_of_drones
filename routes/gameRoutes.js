const mongoose = require('mongoose');
const handlePlayer = require('../services/handlePlayer');

const Game = mongoose.model('games');
const Player = mongoose.model('players');

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

    app.post('/api/endgame', async (req, res) => {
        const { winnerId, gameId } = req.body;

        if (!winnerId || !gameId) {
            res.status(400).send("Missing information");
        } else {
            const player = await Player.findOne({_id: winnerId});
            player.victories += 1;
            player.save();
            
            Game.updateOne({ _id: gameId }, { $set: { '_winner': player._id }}).exec();
            res.send({text: 'Successfully saved'});
        }
    });
};

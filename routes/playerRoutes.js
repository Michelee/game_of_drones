const mongoose = require('mongoose');

const Player = mongoose.model('players');

module.exports = app => {
    app.get('/api/players', async (req, res) => {
        const player = await Player.find({});
        res.send(player);
    });
};

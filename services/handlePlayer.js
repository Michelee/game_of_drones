const mongoose = require('mongoose');
const Player = mongoose.model('players');

module.exports = async playerName => {
    var player = await Player.findOne({ name: playerName });

    if (player) {
        return player;
    } else {
        player = await new Player({ name: playerName }).save(); 
    }

    return player
};

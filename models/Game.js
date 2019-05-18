const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
    _playerOne: { type: Schema.Types.ObjectId, ref: 'Player' },
    _playerTwo:  { type: Schema.Types.ObjectId, ref: 'Player' },
    _winner: Schema.Types.Mixed
});

mongoose.model('games', gameSchema);

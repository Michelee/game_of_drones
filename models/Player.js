const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: String,
    victories: {
        type: Number,
        default: 0
    }
});

mongoose.model('players', playerSchema);

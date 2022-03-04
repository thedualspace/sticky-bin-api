const mongoose = require('mongoose');

const PasteSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        URL: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Paste = mongoose.model('Paste', PasteSchema);

exports.Paste = Paste; 
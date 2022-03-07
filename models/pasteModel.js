const config = require("../config");
const mongoose = require('mongoose');
const { expireAfterSeconds } = config;

const PasteSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        URL: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Paste = mongoose.model('Paste', PasteSchema);

// Adds an expiry time for every paste
// Note: Does not work as expected if expireAfterSeconds is passed the value from .env?
// 
// If an index already exists in the DB, remove this and add the updated one.
// Ensures we always use the latest value from config
Paste.collection.dropIndex({ createdAt: 1 })
PasteSchema.index({ createdAt: 1 }, { expireAfterSeconds });

exports.Paste = Paste; 
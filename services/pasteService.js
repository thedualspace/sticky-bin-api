const { randomURL: { size, alphabet } } = require("../config");
const { nanoid } = require("nanoid");

// Models
const { Paste } = require("../models/pasteModel");

const generateURL = () => {
    return nanoid(size, alphabet);
}

const savePasteService = async (content) => {
    try {
        const URL = generateURL();
        const paste = new Paste({ content, URL })
        await paste.save()
        return paste
    } catch (e) {
        throw(e)
    }
}

// If a record does not exist, .findOne().orFail() will throw an error.
const readPasteService = async (URL) => {
    try {
        const paste = await Paste.findOne({ URL }).orFail(new Error("No document found"))
        return paste
    } catch (e) {
        throw(e)
    }
}



module.exports = {
    generateURL,
    savePasteService,
    readPasteService,
};

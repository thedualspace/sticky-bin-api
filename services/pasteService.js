const { randomURL: { size, alphabet } } = require("../config");
const { nanoid } = require("nanoid");

// Models
const { Paste } = require("../models/pasteModel");

const generateURL = () => {
    return nanoid(size, alphabet);
}

const savePaste = async (content) => {
    try {
        const URL = generateURL();
        const paste = new Paste({ content, URL })
        await paste.save()

        return paste
    } catch (err) {
        return err
    }

}



module.exports = {
    savePaste
};

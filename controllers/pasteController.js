// Services
const { savePasteService, readPasteService } = require("../services/pasteService");


const createPaste = async (req, res) => {
    try {
        const { content } = req.body;
        const paste = await savePasteService(content);

        return res.status(201).send({
            message: "Successfully created new paste!",
            paste,
        });
    } catch (error) {
        // Chose not to include the full error for production, but an interesting discovery for dev/debugging below.
        // As this error object is not serializable, we must use the following approach to send the full error using JSON.
        // const message = JSON.stringify(error, Object.getOwnPropertyNames(error))
        //
        // more info: https://tinyurl.com/593djhar
        return res.status(500).send({
            message: "Error saving new Paste",
            error: error.message,
        });
    }
}

const readPaste = async (req, res) => {
    try {
        const URL = req.params.uniqueURL
        const { content } = await readPasteService(URL)

        return res.status(200).send({
            message: "Successfully found a paste!",
            content
        });
    } catch (error) {
        return res.status(404).send({
            message: "The requested url does not match any paste on record. This link may have expired.",
            error: error.message
        });
    }
}

module.exports = {
    readPaste,
    createPaste
};

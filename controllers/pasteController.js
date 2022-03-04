// Services
const { savePaste } = require("../services/pasteService");


const createPaste = async (req, res) => {
    try {
        const { content } = req.body;
        const paste = await savePaste(content);

        return res.status(201).send({
            message: "Successfully created new paste!",
            paste,
        });
    } catch (error) {
        return res.status(500).send({
            message: "Error saving new Paste",
            error,
        });
    }
}

const readPaste = async (req, res) => {
    try {
        const payload = req.body;
        // const pasteURL = createURL();

        // const paste = new Paste()

        return res.send({
            message: "Successfully encrypted data",
            ok: true,
            errors: [],
            // payload: responseData,
        });
    } catch (error) {
        return res.status(404).send({
            message: "Error encrypting data",
            ok: false,
            error: error,
            payload: {},
        });
    }
}

module.exports = {
    readPaste,
    createPaste
};

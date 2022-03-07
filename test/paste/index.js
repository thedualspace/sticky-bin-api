const assert = require("chai").assert;
const mocha = require("mocha");
const config = require("../../config");
const { generateURL, savePasteService, readPasteService } = require("../../services/pasteService"); // Import the service we want to test

mocha.describe("Paste Service", function () {
    const URL = generateURL();
    mocha.describe("Create a randomly generated URL", function () {
        it("Is not null", function () {
            assert.isNotNull(URL);
        });

        it("Has the correct length", function () {
            assert.equal(URL.length, config.randomURL.size);
        });

        it("Composed of URL safe characters (alphanumeric plus \"-\"\ and \"_\")", function () {
            const regex = RegExp(`[0-9A-Za-z_\-]{${config.randomURL.size}}`);
            const isCorrectCharacters = regex.test(URL)
            assert.isTrue(isCorrectCharacters);
        });
    });

    mocha.describe("Create a paste", function () {
        const testContent = "A test paste!";

        it("Returns an object", async function (done) {
            try {
                const paste = await savePasteService(testContent);
                assert.isObject(paste);
                done()
            } catch (e) {
                done(e)
            }
        });

        // it("Has property \"content\"", async function () {
        //     try {
        //         const paste = await savePasteService(testContent);
        //         assert.include(paste, { content: testContent });
        //         done()
        //     } catch (e) {
        //         done(e)
        //     }
        // });

    });
});
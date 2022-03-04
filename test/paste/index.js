const assert = require("chai").assert;
const mocha = require("mocha");
const { createURL } = require("../../services/pasteService"); // Import the service we want to test

mocha.describe("Paste Service", () => {
    const URL = createURL();
    mocha.describe("Create a randomly generated URL", () => {
        it("Is not null", () => {
            assert.isNotNull(URL);
        });

        //  it( "Exposes the createPost method", () => {
        //    assert.isFunction( PostServiceInstance.create );
        //  } );
    });
});
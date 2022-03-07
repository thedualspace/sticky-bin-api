# MBA Submission

My submission for the Much Better Adventures take-home task.

This implementation uses React for the frontend and Node and MongoDB for the backend. Testing is performed with Chai and Mocha.

## Online Demo

A working demo can be [seen here](https://sticky-bin.herokuapp.com/).

## Some points of note:

- **Line  Numbers**: Support for multiline snippets is provided by splitting submitted pastes at each newline character (\n). The paste can then be rendered as a numbered list to improve readability when sharing code, the most common use-case for a paste bin. White space is maintained also.

- **Customisation**: Values for URL random string length, and URL character set are assignable in the .env, and the expiry time can be set in the config (please ask for more details). Default values are used if these values are not specified.

- **UI Feedback**: The user is kept informed while services are running using various means. A spinner is shown while the app waits for a confirmation response that the paste has been submitted, a loading message is shown before a requested paste has been retrieved from the server, and an error message is shown if the paste requested has expired or does not exist.

- **Testing**: Some sample unit tests are included using the Mocha and Chai libraries. 


## Installation

Use npm to install required packages.

```bash
npm install
```

**Note: .env.sample should be renamed to .env and populated with the required fields before starting the API. A mongo instance is required.**

## Usage

To start the API, run the command below.

```bash
node index.js
```

By default the project will run at http://localhost:3333/

## Endpoints
**/api/paste** (POST requests)

```
//Expects JSON of the form:
{
    "content": "Some code!",
}

// Returns
{
    "message": "Successfully created new paste!",
    "paste": {
        "content": "Some code!",
        "URL": "RKa7t484",
        "_id": "622621c8e76679a440c671eb",
        "createdAt": "2022-03-07T15:16:24.172Z",
        "updatedAt": "2022-03-07T15:16:24.172Z",
        "__v": 0
    }
}
```
**/api/paste/:paste-url** (GET requests)

```
// Returns
{
    "message": "Successfully found a paste!",
    "content": "Some code!",
}
```

For both GET and POST requests, if a request is unsuccessful an error property will be returned in the response with an associated error message.

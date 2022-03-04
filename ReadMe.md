
# Evervault Submission

My submission for the Evervault Take-Home challenge.

## Installation

Use npm to install required packages.

```bash
npm install
```
**Note: .env.sample must be renamed to .env before starting the API.** 

## Usage
To start the API, run the command below. 

```bash
node index.js
```
By default the project will run at http://localhost:3333/

## Endpoints

### Encryption 
**/encryption/encrypt**

```
//Expects JSON of the form:
{
    "first": "Hello",
    "second": "goodbye",
    "third": {
        "inner_one": "Hello",
        "inner_two": "goodbye"
    }
}

// Returns
{
    "message": "Successfully encrypted data",
    "ok": true,
    "errors": [],
    "payload": {
        "first": "U2FsdGVkX1/YKTeKh91KDxRT4lHIk0e2glmt5jej0zI=",
        "second": "U2FsdGVkX1+WsOmPf2DGQS1RglIrEL2ipmphmr7AjXI=",
        "third": "U2FsdGVkX18ZO3jSxJ96rAtux7uv1H+0rMiN6ZNgcVP/C3jDTU+NRyN8E4PruFkCRioFkwLA9omhyyo71/kDKA=="
    }
}
```

**/encryption/decrypt**

```
//Expects JSON of the form:
{
    "first": "U2FsdGVkX1+CFXpwMW6DUw27qjZrzBP43+qCTWSuQqc=",
    "second": "U2FsdGVkX19wDMjm1NEp0c6IIn/0bFDGEO7EmuLOPHA=",
    "third": "U2FsdGVkX1+BXSolxRoh96kR9ow8c/dLHvE5toCAFP8a3s0f/HLRQOepdUgxHOKxMd3MmX+UgXRC/6aVgJD94A=="
}

// Returns
{
    "message": "Successfully decrypted data",
    "ok": true,
    "errors": [],
    "payload": {
        "first": "Hello",
        "second": "goodbye",
        "third": {
            "inner_one": "Hello",
            "inner_two": "goodbye"
        }
    }
}
```
### Verification
**/verification/sign**

```
//Expects JSON of the form:
{
    "first": "Hello",
    "second": "goodbye",
    "third": {
        "inner_one": "Hello",
        "inner_two": "goodbye"
    }
}

// Returns
{
    "message": "Data signature successful",
    "ok": true,
    "errors": [],
    "payload": {
        "body": {
            "first": "Hello",
            "second": "goodbye",
            "third": {
                "inner_one": "Hello",
                "inner_two": "goodbye"
            }
        },
        "signature": "ec82985c3052bb1c72e34c0f01924049ce7840a55038179a5d930410dacee365"
    }
}
```

**/verification/verify**

```
//Expects JSON of the form:
{
    "data": {
        "first": "U2FsdGVkX1/YKTeKh91KDxRT4lHIk0e2glmt5jej0zI=",
        "second": "goodbye",
        "third": "U2FsdGVkX1+BXSolxRoh96kR9ow8c/dLHvE5toCAFP8a3s0f/HLRQOepdUgxHOKxMd3MmX+UgXRC/6aVgJD94A=="
    },
    "signature": "ec82985c3052bb1c72e34c0f01924049ce7840a55038179a5d930410dacee365"
}

// Returns status 204 if successful, or status 400 if not.

```



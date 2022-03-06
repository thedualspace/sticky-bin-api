// Dependency Libraries
const express = require("express");
require("dotenv").config();
const logger = require("pino")({ prettyPrint: { levelFirst: true } });
const expressPino = require("express-pino-logger")({ logger: logger });
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");

// Consts
const config = require("./config")
const app = express();
const port = config.port;

// Express Uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressPino);

// Required Route Files
const pasteRoutes = require("./routes/paste");

// Routes
app.use("/paste", pasteRoutes);

// Connect to Database
if (process.env.NODE_ENV === "prod") {
    mongoose
        .connect(config.dbUrl, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            auth: {
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
            },
        })
        .then(() => {
            logger.info(`Connected to MongoDB (${process.env.NODE_ENV}) ...`);
        })
        .catch((error) => {
            logger.info(
                `Could not connect to MongoDB (${process.env.NODE_ENV})...`,
            );
        });
} else {
    app.use(cors());
    mongoose
        .connect(config.dbUrl, {
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
            // useUnifiedTopology: true,
        })
        .then(() => {
            logger.info(`Connected to MongoDB (${process.env.NODE_ENV}) ...`);
        })
        .catch((error) => {
            logger.info(
                `Could not connect to MongoDB (${process.env.NODE_ENV}) ...`
            );
        });
}

// Start Server
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
    logger.info(`Listening on port ${port}...`);
});

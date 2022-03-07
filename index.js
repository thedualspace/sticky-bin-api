// Dependency Libraries
const path = require('path');
const express = require("express");
require("dotenv").config();
const logger = require("pino")({ prettyPrint: { levelFirst: true } });
const expressPino = require("express-pino-logger")({ logger: logger });
const bodyParser = require("body-parser");

// Abstracting some startup logic into Loaders
const dbConnect = require("./loaders/dbConnect");

// Consts
const config = require("./config")
const app = express();
const port = config.port;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressPino);

// Required Route Files
const pasteRoutes = require("./routes/paste");

// Routes
app.use("/api/paste", pasteRoutes);

// Connect to Database
dbConnect(app, logger);

// Serve frontend
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start Server
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
    logger.info(`Listening on port ${port}...`);
});

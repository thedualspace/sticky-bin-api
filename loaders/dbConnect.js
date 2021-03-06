const cors = require('cors');
const mongoose = require("mongoose");
const config = require("../config")

const dbConnect = (app, logger) => {
    if (process.env.NODE_ENV === "production") {
        mongoose
            .connect(config.dbUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
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
                useNewUrlParser: true,
                useUnifiedTopology: true,
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
}

module.exports = dbConnect
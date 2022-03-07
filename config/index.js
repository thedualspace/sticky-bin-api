const config = {
    dbUrl: process.env.DBURL || "mongodb://localhost/test-db",
    port: process.env.PORT || 3333,
    env: process.env.NODE_ENV || "development",
    expireAfterSeconds: 900,
    randomURL: {
        size: process.env.RANDOM_URL_SIZE || 8,
        alphabet: process.env.RANDOM_URL_ALPHABET || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    }
};

module.exports = config;
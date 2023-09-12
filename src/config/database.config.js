const env = process.env;

databaseConfig = {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
};

module.exports = databaseConfig;
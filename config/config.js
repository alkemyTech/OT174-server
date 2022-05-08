require('dotenv').config()

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "dialect": "mysql",
        "sendgrid_api_key" : process.env.SENDGRID_API_KEY,
        "sendgrid_email" : process.env.SENDGRID_EMAIL
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql",
        "sendgrid_api_key" : process.env.SENDGRID_API_KEY,
        "sendgrid_email" : process.env.SENDGRID_EMAIL
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql",
        "sendgrid_api_key" : process.env.SENDGRID_API_KEY,
        "sendgrid_email" : process.env.SENDGRID_EMAIL
    }
}
require('dotenv').config()

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "SENDGRID_API_KEY": process.env.SENDGRID_API_KEY,
        "SENDGRID_DOMAIN": process.env.SENDGRID_DOMAIN,
        "dialect": "mysql"
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "SENDGRID_API_KEY": process.env.SENDGRID_API_KEY,
        "SENDGRID_DOMAIN": process.env.SENDGRID_DOMAIN,
        "dialect": "mysql"
    }
}
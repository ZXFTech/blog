const env = process.env;

let SERVICE_CONFIG

if (env === 'development') {
    SERVICE_CONFIG = {
        host:'localhost',
        port: 3000
    }
}

module.exports = {
    SERVICE_CONFIG
}
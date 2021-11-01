require('dotenv').config()
const Server = require('./infrastructure/server/index')

const oServer = new Server()
oServer
    .create()
    .listen(process.env.SERVER_PORT)

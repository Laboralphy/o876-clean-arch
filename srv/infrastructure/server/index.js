const express = require('express')
const { WebSocket } = require('ws')
const http = require('http')
const path = require('path')
const wsHandler = require('./routes/ws')
const mwSendHpr = require('./middlewares/send-hpr')
const debug = require('debug')

const logServ = debug('serv:main')

class Server {
    constructor () {
        this._httpServer = null
        this._application = null
    }

    /**
     * Création des instance des différents servers (express, http, ws)
     */
    create () {
        logServ('warming up')
        const app = express()
        const serv = http.createServer(app)
        const wss = new WebSocket.Server({ server: serv })
        this._application = app
        this._httpServer = serv
        this._wsServer = wss
        wss.on('connection', ws => wsHandler(wss, ws))
        app.use(mwSendHpr)
        app.use('/api', require('./routes/backend'))
        app.use('/', express.static(path.resolve(__dirname, '../../../public/')))
        return this
    }

    /**
     * Mise à l'ecoute du serveur sur le port spécifié en paramètre
     * @param port {number}
     * @returns {Promise<undefined>}
     */
    listen (port) {
        return new Promise(resolve => {
            this._httpServer.listen(port, '0.0.0.0', () => {
                logServ('now listening on port ' + port)
                resolve()
            })
        })
    }
}

module.exports = Server

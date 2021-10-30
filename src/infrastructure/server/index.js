const express = require('express')
const http = require('http')
const { container } = require('../../common/container')
const httpHelper = require('../presentation/http-helper')

class Server {
    constructor () {
        this._httpServer = null
        this._application = null
    }

    create () {
        const app = express()
        const serv = http.createServer(app)

        app.get('/user/find/:name', async (req, res) => {
            const h = await container.resolve('UserController').findUser(req.params.name)
            res.status(h.statusCode).end(h.body)
        })

        this._application = app
        this._httpServer = serv
    }

    listen (port) {
        return new Promise(resolve => {
            this._httpServer.listen(port, () => {
                resolve()
            })
        })
    }
}

module.exports = Server

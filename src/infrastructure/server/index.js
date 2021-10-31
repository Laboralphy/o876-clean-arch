const express = require('express')
const http = require('http')
const { container } = require('../../common/container')

class Server {
    constructor () {
        this._httpServer = null
        this._application = null
    }

    sendResponse (res, h) {
        res.status(h.statusCode)
        if (h.body !== null) {
            if (typeof h.body === 'object') {
                res.json(h.body)
            } else {
                res.end(h.body)
            }
        } else {
            res.end()
        }
    }

    create () {
        const app = express()
        const serv = http.createServer(app)

        app.get('/user/find/:name', async (req, res) => {
            const h = await container.resolve('UserController').findUser(req.params.name)
            this.sendResponse(res, h)
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

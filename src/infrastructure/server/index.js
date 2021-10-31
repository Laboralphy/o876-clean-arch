const express = require('express')
const http = require('http')
const { container } = require('../../common/container')

class Server {
    constructor () {
        this._httpServer = null
        this._application = null
    }

    sendResponse (res, h) {
        /**
         * le paramètre h doit etre une réponse http telle que composée dans http-helper
         */
        if (!('statusCodex' in h) || !('body' in h)) {
            res.status(500).end('500 - internal server error : malformed http response')
            return
        }
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
        this._application = app
        this._httpServer = serv
        this.defineRoutes()
    }

    listen (port) {
        return new Promise(resolve => {
            this._httpServer.listen(port, () => {
                resolve()
            })
        })
    }

    defineRoutes () {
        const app = this._application

        app.get('/user/find/:name', async (req, res) => {
            const h = await container.resolve('UserController').findUser(req.params.name)
            this.sendResponse(res, h)
        })
    }
}

module.exports = Server

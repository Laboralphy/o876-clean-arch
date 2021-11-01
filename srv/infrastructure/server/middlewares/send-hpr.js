/**
 * Envoie une réponse au client
 * @param res {object} objet response d'express pour envoyer physiquement la réponse
 * @param req {object}
 * @param next {function}
 */
function main (req, res, next) {
    res.sendPresentedResponse = h => {
        /**
         * le paramètre h doit etre une réponse http telle que composée dans http-helper
         */
        if (!('statusCode' in h) || !('body' in h)) {
            console.error(h)
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
    next()
}

module.exports = main

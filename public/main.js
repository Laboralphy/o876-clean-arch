// main.js

let SOCKET = null

function connectWSS (sRoute) {
    return new Promise((resolve, reject) => {
        const sSocketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:')
        const sSocketUrl = sSocketProtocol + '//' + window.location.hostname + ':' + window.location.port + '/' + sRoute
        const socket = new WebSocket(sSocketUrl)
        console.log(socket)
        socket.onopen = () => {
            console.log('connection established', socket.url)
            resolve(socket)
        }
        socket.onerror = e => {
            console.log('connection error', socket.url, e)
            reject(e)
        }
    })
}

function defineWSRoutes (socket) {
    socket.onmessage = (...payload) => {
        console.log('ws message', ...payload)
    }
}

function sendMessage (socket, message) {
    socket.send('message', message)
}

async function main () {
    console.log('started')
    SOCKET = await connectWSS('ws')
    console.log('connected')
    defineWSRoutes(SOCKET)
}

window.addEventListener('load', main)

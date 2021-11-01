function main (server, socket) {
    socket.on('message', (...message) => {
        console.log('received %s', message.join(', '))
        socket.send('hello you sent -> ' + message.join(', '))
    })
}

module.exports = main

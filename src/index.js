const Server = require('./infrastructure/server/index')

const oServer = new Server()
oServer.create()
oServer.listen(2222).then(() => console.log('listening on port', 2222))

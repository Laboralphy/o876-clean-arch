const awilix = require('awilix')

function createContainer () {
    const container = awilix.createContainer()

    container.loadModules(
        [
            'srv/infrastructure/controllers/*.js',
            'srv/interactors/*.js',
            'srv/infrastructure/repositories/*.js'
        ],
        {
            resolverOptions: {
                register: awilix.asClass
            }
        }
    )
    return container
}

module.exports = {
    container: createContainer()
}

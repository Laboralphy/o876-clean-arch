const awilix = require('awilix')

function createContainer () {
    const container = awilix.createContainer()

    container.loadModules(
        [
            'src/infrastructure/controllers/*.js',
            'src/interactors/*.js',
            'src/infrastructure/repositories/*.js'
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

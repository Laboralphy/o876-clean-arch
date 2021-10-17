const httpHelper = require('../presentation/http-helper')
class UserController {
    constructor ({ UserInteractor }) {
        this.interactor = UserInteractor
    }

    async findUser (name) {
        try {
            console.log('debug 1')
            const oUser = await this.interactor.findUser(name)
            console.log('debug 2')
            return httpHelper.ok({
                id: oUser.id,
                name: oUser.name
            })
        } catch (e) {
            return httpHelper.notFound()
        }
    }
}

module.exports = UserController

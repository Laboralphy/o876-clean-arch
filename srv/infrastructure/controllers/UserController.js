const httpHelper = require('../presentation/http-helper')
class UserController {
    constructor ({ UserInteractor }) {
        this.interactor = UserInteractor
    }

    async findUser (name) {
        try {
            /**
             * @type {User}
             */
            const oUser = await this.interactor.findUser(name)
            return httpHelper.ok({
                id: oUser.id,
                name: oUser.username
            })
        } catch (e) {
            return httpHelper.notFound()
        }
    }
}

module.exports = UserController

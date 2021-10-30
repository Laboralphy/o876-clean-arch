const validator = require('../common/validator')

/**
 * @class User
 * @property id {number}
 * @property username {string}
 * @property password {string}
 * @property email {string}
 */
class User {
    constructor (payload) {
        this.id = validator.validateNumber(payload.id)
        this.username = validator.validateString(payload.username)
        this.password = validator.validateString(payload.password)
        this.email = validator.validateString(payload.email)
    }
}

module.exports = User

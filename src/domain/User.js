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
        this._id = 0
        this._username = ''
        this._password = ''
        this._email = ''
        this.id = payload.id
        this.username = payload.username
        this.password = payload.password
        this.email = payload.email
    }

    /**
     * identifiant de l'utilisateur
     * @returns {number}
     */
    get id () {
        return this._id
    }

    /**
     * définir identifiant de l'utilisateur
     * @param value {number}
     */
    set id (value) {
        this._id = validator.validateNumber(value)
    }

    /**
     * Nom de l'utilisateur
     * @returns {string}
     */
    get username () {
        return this._username
    }

    /**
     * définir nom de l'utilisateur
     * @param value {string}
     */
    set username (value) {
        this._username = validator.validateString(value)
    }

    /**
     * mot de passe de l'utilisateur
     * @returns {string}
     */
    get password () {
        return this._password
    }

    /**
     * modifier mot de passe de l'utilisateur
     * @param value {string}
     */
    set password (value) {
        this._password = validator.validateString(value)
    }

    /**
     * adresse e-mail de l'utilisateur
     * @returns {string}
     */
    get email () {
        return this._email
    }

    /**
     * definir l'adresse e-mail de l'utilisateur
     * @param value {string}
     */
    set email (value) {
        this._email = validator.validateString(value)
    }
}

module.exports = User

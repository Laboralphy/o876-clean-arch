class User {
    constructor(payload) {
        Object.assign(this, payload)
        this.id = payload.id
        this.username = payload.username
        this.password = payload.password
        this.email = payload.email
    }
}

module.exports = User

class UserInteractor {
    constructor({ UserRepositoryInMem }) {
        this.userRepository = UserRepositoryInMem
    }

    findUser (name) {
        return this
            .userRepository
            .find(name)
            .catch(e => console.error(e))
    }
}

module.exports = UserInteractor

class UserInteractor {
    constructor({ UserRepositoryInMem }) {
        this.userRepository = UserRepositoryInMem
    }

    /**
     * Recherche un utilisateur par son nom
     * @param name {string}
     * @returns {Promise<User>}
     */
    findUser (name) {
        return this
            .userRepository
            .find(name)
            .catch(e => console.error(e))
    }
}

module.exports = UserInteractor

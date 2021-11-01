class UserRepository {
    persist (domainUser) {
        return Promise.reject(new Error('ERR_METHOD_NOT_IMPLEMENTED'))
    }

    merge (domainUser) {
        return Promise.reject(new Error('ERR_METHOD_NOT_IMPLEMENTED'))
    }

    remove (id) {
        return Promise.reject(new Error('ERR_METHOD_NOT_IMPLEMENTED'))
    }

    get (id) {
        return Promise.reject(new Error('ERR_METHOD_NOT_IMPLEMENTED'))
    }

    find (name) {
        return Promise.reject(new Error('ERR_METHOD_NOT_IMPLEMENTED'))
    }
}

module.exports = UserRepository

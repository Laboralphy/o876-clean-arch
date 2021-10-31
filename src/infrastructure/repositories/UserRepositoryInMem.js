const UserRepository = require('./UserRepository')
const User = require('../../domain/User')

class UserRepositoryInMem extends UserRepository {
    constructor () {
        super()
        this._index = 0
        this._data = {
            "1": {
                id: 1,
                username: 'ralphy',
                password: 'abc123',
                email: 'ralphy@ralphy.com'
            },
            "2": {
                id: 2,
                username: 'maya',
                password: 'abc123',
                email: 'maya@ralphy.com'
            }
        }
    }

    _dataAsArray() {
        return Object.values(this._data);
    }

    persist (domainUser) {
        const row = {
            ...domainUser
        }
        const id = ++this._index
        row.id = id
        this._data[id] = row
        return Promise.resolve(row)
    }

    merge (domainUser) {
        return Promise.resolve({
            ...this._data[domainUser.id],
            ...domainUser
        })
    }

    remove (id) {
        delete this._data[id]
        return Promise.resolve()
    }

    get (id) {
        if (id in this._data) {
            return Promise.resolve(new User(this._data[id]))
        } else {
            return Promise.reject(new Error('ERR_INVALID_ID'))
        }
    }

    find (name) {
        const payload = this._dataAsArray().find(u => u.username === name)
        if (payload) {
            return Promise.resolve(new User(payload))
        } else {
            return Promise.reject(new Error('ERR_NOT_FOUND'))
        }
    }
}

module.exports = UserRepositoryInMem

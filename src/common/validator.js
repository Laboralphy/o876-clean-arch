function validateNumber (x) {
    if (typeof x === 'number') {
        return x
    } else {
        throw new TypeError('expected number')
    }
}

function validateString (x) {
    if (typeof x === 'string') {
        return x
    } else {
        throw new TypeError('expected string')
    }
}

function validateArray (x) {
    if (typeof x === 'object' && Array.isArray(x)) {
        return x
    } else {
        throw new TypeError('expected array')
    }
}

module.exports = {
    validateNumber,
    validateString,
    validateArray
}

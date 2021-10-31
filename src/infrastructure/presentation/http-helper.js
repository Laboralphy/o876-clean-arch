function badRequest () {
    return {
        statusCode: 400,
        body: '400 - bad request'
    }
}

function unauthorized () {
    return {
        statusCode: 401,
        body: '401 - unauthorized'
    }
}

function forbidden () {
    return {
        statusCode: 403,
        body: '403 - forbidden'
    }
}

function notFound () {
    return {
        statusCode: 404,
        body: '404 - not found'
    }
}


function serverError (error) {
    return {
        statusCode: 500,
        body: error
    }
}

function ok (data) {
    return {
        statusCode: 200,
        body: data
    }
}

function noContent () {
    return {
        statusCode: 204,
        body: null
    }
}

module.exports = {
    noContent,
    ok,
    serverError,
    badRequest,
    unauthorized,
    forbidden,
    notFound
}

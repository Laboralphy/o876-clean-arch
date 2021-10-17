function badRequest (error) {
    return {
        statusCode: 400,
        body: error
    }
}

function unauthorize (error) {
    return {
        statusCode: 401,
        body: error
    }
}

function forbidden (error) {
    return {
        statusCode: 403,
        body: error
    }
}

function notFound () {
    return {
        statusCode: 404,
        body: null
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
    unauthorize,
    forbidden,
    notFound
}

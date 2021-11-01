/**
 * @typedef HttpPresentation {object}
 * @property body {string} contenu du body de réponse
 * @property statusCode {number} code de status http
 */

/**
 * Requete mal formée : La syntaxe de la requête est erronée.
 * @returns {HttpPresentation}
 */
function badRequest () {
    return {
        statusCode: 400,
        body: '400 - bad request'
    }
}

/**
 * Non autorisé : Une authentification est nécessaire pour accéder à la ressource.
 * @returns {HttpPresentation}
 */
function unauthorized () {
    return {
        statusCode: 401,
        body: '401 - unauthorized'
    }
}

/**
 * Le serveur a compris la requête, mais refuse de l'exécuter. Contrairement à l'erreur 401, s'authentifier ne fera
 * aucune différence. Sur les serveurs où l'authentification est requise, cela signifie généralement que
 * l'authentification a été acceptée mais que les droits d'accès ne permettent pas au client d'accéder à la ressource.
 * @returns {HttpPresentation}
 */
function forbidden () {
    return {
        statusCode: 403,
        body: '403 - forbidden'
    }
}

/**
 * Ressource non trouvée.
 * @returns {{body: string, statusCode: number}}
 */
function notFound () {
    return {
        statusCode: 404,
        body: '404 - not found'
    }
}

/**
 * Erreur interne du serveur.
 * @param error {string}
 * @returns {HttpPresentation}
 */
function serverError (error) {
    return {
        statusCode: 500,
        body: error
    }
}

/**
 * Requête traitée avec succès.
 * @param data {*}
 * @returns {HttpPresentation}
 */
function ok (data) {
    return {
        statusCode: 200,
        body: data
    }
}

/**
 * Requête traitée avec succès mais pas d’information à renvoyer.
 * @returns {HttpPresentation}
 */
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

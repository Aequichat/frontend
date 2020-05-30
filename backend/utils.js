const debug = require('debug')('API-REST');

/**
 * Handle falta error on http requests
 * @param {Error} error Error caused on http request
 * @param {Object} req request object
 * @param {Object} res response object
 */
function handleError(error, req, res) {
    debug('ERROR ->', error);
    res.status(500).send({ error });
}

module.exports = {
    handleError,
};

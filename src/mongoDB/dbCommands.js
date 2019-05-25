const request = require('request');
const strClean = require('../cleanse/inputClean');

/**
 * Send a get request to the database to retrieve meme
 * @param url the target endpoint + name of meme
 * @returns {Promise<*>}
 */
async function get(url) {

    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        request.get({
            url: url,
            json: true,
            headers: {'User-Agent': 'request'}
        }, (err, res, data) => {
            if (err) {
                reject('Error:', err);
            } else if (res.statusCode !== 200) {
                reject('Status:', res.statusCode);
            } else {
                // data is already parsed as JSON:
                resolve(data);
            }
        });
    });
}

/**
 * Add a new meme to the database via post request
 * @param url target endpoint
 * @param args includes name of meme and source
 * @returns {Promise<*>}
 */
async function post(url, args) {

    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        request.post({
            url: url,
            json: true,
            body: `name=${args[0].toString().toLowerCase()}&source=${strClean.replaceAll(args[1], "&", "%26" )}`,
            headers: {'content-type' : 'application/x-www-form-urlencoded'}
        }, (err, res, data) => {
            if (err) {
                reject('Error:', err);
            } else if (res.statusCode !== 200) {
                reject('Status:', res.statusCode);
            } else {
                // data is already parsed as JSON:
                resolve(data);
            }
        });
    });
}

/**
 * Remove a meme from the database
 * @param url the target endpoint + id of meme
 * @returns {Promise<*>}
 */
async function delete_meme(url) {

    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        request.delete({
            url: url,
            json: true,
            headers: {'User-Agent': 'request'}
        }, (err, res, data) => {
            if (err) {
                reject('Error:', err);
            } else if (res.statusCode !== 200) {
                reject('Status:', res.statusCode);
            } else {
                // data is already parsed as JSON:
                resolve(data);
            }
        });
    });
}

/**
 * Update an existing meme in the db
 * @param url target end point + id of meme
 * @param args includes the id, name, and source of meme
 * @returns {Promise<*>}
 */
async function put(url, args) {

    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        request.put({
            url: url,
            json: true,
            body: `name=${args[1].toString().toLowerCase()}&source=${strClean.replaceAll(args[2], "&", "%26" )}`,
            headers: {'content-type' : 'application/x-www-form-urlencoded'}
            }, (err, res, data) => {
            if (err) {
                reject('Error:', err);
            } else if (res.statusCode !== 200) {
                reject('Status:', res.statusCode);
            } else {
                // data is already parsed as JSON:
                resolve(data);
            }
        });
    });
}

module.exports = {
    get: get,
    post:post,
    delete_meme:delete_meme,
    put:put
};
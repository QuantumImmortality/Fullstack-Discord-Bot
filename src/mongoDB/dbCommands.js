const request = require('request');
const strClean = require('../cleanse/inputClean');

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
                resolve(JSON.stringify(data));
            }
        });
    });
}

async function post(url, args) {

    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        request.post({
            url: url,
            json: true,
            body: `name=${args[0].toLowerCase()}&source=${strClean.replaceAll(args[1], "&", "%26" )}`,
            headers: {'content-type' : 'application/x-www-form-urlencoded'}
        }, (err, res, data) => {
            if (err) {
                reject('Error:', err);
            } else if (res.statusCode !== 200) {
                reject('Status:', res.statusCode);
            } else {
                // data is already parsed as JSON:
                resolve(JSON.stringify(data));
            }
        });
    });
}

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
                resolve(JSON.stringify(data));
            }
        });
    });
}

async function put(url, args) {

    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        request.put({
            url: url,
            json: true,
            body: `name=${args[1].toLowerCase()}&source=${strClean.replaceAll(args[2], "&", "%26" )}`,
            headers: {'content-type' : 'application/x-www-form-urlencoded'}
            }, (err, res, data) => {
            if (err) {
                reject('Error:', err);
            } else if (res.statusCode !== 200) {
                reject('Status:', res.statusCode);
            } else {
                // data is already parsed as JSON:
                resolve(JSON.stringify(data));
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
const fetch = require("node-fetch");
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = require('request');

async function GET(url) {

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

module.exports = {
    GET: GET
};
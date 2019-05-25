const db = require('../../mongoDB/dbCommands');
const endpoint = require('../../../config/config.json').dbEndpoint;

/**
 * Get a meme from the database
 * @param client the requesting client
 * @param message origination point of message
 * @param args the args sent with the command
 * @returns {Promise<void>}
 */
exports.run = async (client, message, args) => {
    db.get(endpoint + args.toString().toLowerCase()).then(function(response) {
        if(response.data.length) {
            let json = response.data[0].source;
            message.channel.send(json);
        } else {
            message.channel.send("meme does not yet exist, why not add it?");
        }
    }, function(error) {
        console.error("Failed get! ", error);
        message.channel.send(error);
    });
};
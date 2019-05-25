const db = require('../../mongoDB/dbCommands');
const endpoint = require('../../../config/config.json').dbEndpoint;

/**
 * Function to delete memes from the database
 * @param client the requesting client
 * @param message origination point of message
 * @param args the args sent with the command
 * @returns {Promise<void>}
 */
exports.run = async (client, message, args) => {
    if(args[0].length === 24) {
        db.delete_meme(endpoint + args).then(function (response) {
            message.channel.send(response.message);
        }, function (error) {
            console.error("Failed get! ", error);
            message.channel.send(error);
        });
    }
    else
        message.channel.send("Invalid meme ID given");
};
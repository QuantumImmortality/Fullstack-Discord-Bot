const db = require('../../mongoDB/dbCommands');
const endpoint = require('../../../config/config.json').dbEndpoint;

/**
 * Add a meme to the database
 * @param client the requesting client
 * @param message origination point of message
 * @param args the args sent with the command
 * @returns {Promise<void>}
 */
exports.run = async (client, message, args) => {

    if(args.length >= 2) {
        db.post(endpoint, args).then(function (response) {
            message.channel.send(response.message);
        }, function (error) {
            console.error("Failed!", error);
            message.channel.send(error);
        });
    } else{
        message.channel.send("Insufficient args, need name and source");
    }
};
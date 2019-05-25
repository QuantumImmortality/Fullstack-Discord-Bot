const db = require('../../mongoDB/dbCommands');
const endpoint = require('../../../config/config.json').dbEndpoint;

/**
 * Update a meme in the database
 * @param client the requesting client
 * @param message origination point of message
 * @param args the args sent with the command
 * @returns {Promise<void>}
 */
exports.run = async (client, message, args) => {

    if(args.length === 3) {
        if(args[0].length === 24) {
            db.put(endpoint + args[0], args).then(function (response) {
                message.channel.send(response.message);
            }, function (error) {
                console.error("Failed!", error);
                message.channel.send(error);
            });
        }
        else
            message.channel.send("Invalid meme ID given");
    } else
        message.channel.send('Insufficient args, need <id> <name> <source>');

};
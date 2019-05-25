const db = require('../../mongoDB/dbCommands');

/**
 * Function to delete memes from the database
 * @param client the requesting client
 * @param message origination point of message
 * @param args the args sent with the command
 * @returns {Promise<void>}
 */
exports.run = async (client, message, args) => {
    if(args[0].length === 24) {
        db.delete_meme('http://35.243.224.195:8080/api/memes/' + args).then(function (response) {
            message.channel.send(JSON.parse(response).message);
        }, function (error) {
            console.error("Failed get! ", error);
            message.channel.send(error);
        });
    }
    else
        message.channel.send("Invalid meme ID given");
};
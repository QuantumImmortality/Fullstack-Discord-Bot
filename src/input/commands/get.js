const db = require('../../mongoDB/dbCommands');

/**
 * Get a meme from the database
 * @param client the requesting client
 * @param message origination point of message
 * @param args the args sent with the command
 * @returns {Promise<void>}
 */
exports.run = async (client, message, args) => {
    db.get('http://35.243.224.195:8080/api/memes/' + args.toLowerCase()).then(function(response) {
        if(JSON.parse(response).data.length) {
            let json = JSON.parse(response).data[0].source;
            message.channel.send(json);
        }
    }, function(error) {
        console.error("Failed get! ", error);
        message.channel.send(error);
    });
};
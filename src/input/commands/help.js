/**
 * List the commands available
 * @param client the requesting client
 * @param message origination point of message
 * @param args the args sent with the command
 * @returns {Promise<void>}
 */
exports.run = async (client, message, args) => {
    message.channel.send("The available commands: \n" +
        "!add <meme name> <source> \n" +
        "!get <meme name> \n" +
        "!delete <meme id 24 chars long> \n" +
        "!update <meme name> <source>");
};
const commands = require('./commands/commandsIndex');

/**
 * Handle which functionality to call on based on the given command
 * @param client the requesting client
 * @param message origination point of message
 * @param command the input command
 * @param args the arguments submitted with the command
 * @returns {Promise<void>}
 */
exports.handle = async (client, message, command, args) => {
    try {
        commands[command].run(client, message, args);
    } catch (e) {
        message.channel.send(`Not a valid command!`);
    }
};


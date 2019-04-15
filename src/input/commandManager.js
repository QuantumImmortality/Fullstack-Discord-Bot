const commands = require('./commands/commandsIndex.js');

exports.handle = async (client, message, command, args) => {
    try {
        commands[command].run(client, message, args);
    } catch (e) {
        message.channel.send(`Not a valid command!`);
    }
}
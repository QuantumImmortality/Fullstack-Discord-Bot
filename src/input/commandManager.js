const commands = require('./commands/commandsIndex');
const mongclient = require('../mongoDB/connect');

exports.handle = async (client, message, command, args) => {

    console.log("in comMan");

    let collection = mongclient.getCollection();

    if(collection === undefined)
        console.log("collection is undefined");
    console.log("after connection");

    try {
        commands[command].run(client, message, args);
    } catch (e) {
        message.channel.send(`Not a valid command!`);
    }
};
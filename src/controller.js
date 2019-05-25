const auth = require('../config/credentials.json').token;
const commandPrefix = require('../config/config.json').commandPrefix;
const commandManager = require('./input/commandManager');

const output = require('./output/out');
const Discord = require('discord.js');
const db = require('./mongoDB/dbCommands');
const client = new Discord.Client();

client.login(auth);

/**
 * On initial bot launch, list the channels and server name
 */
client.on('ready', () => {
    // List servers the bot is connected to
    client.guilds.forEach((guild) => {
        console.log(" Server name: " + guild.name);

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
});

/**
 * Listener for when a message is sent in discord chat
 */
client.on('message', msg => {
    if (msg.author.bot || !msg.content.startsWith(commandPrefix)) return;
    let args = msg.content.substr(1).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    commandManager.handle(client, msg, cmd, args);
});
const auth = require('../config/credentials.json');
const commandPrefix = require('../config/config.json').commandPrefix
const commandManager = require('./input/commandManager.js');

const output = require('./output/out.js')
const Discord = require('discord.js')
const client = new Discord.Client()

client.login(auth.token)

client.on('ready', () => {
    // List servers the bot is connected to
    client.guilds.forEach((guild) => {
        console.log(" Server name: " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
})

client.on('message', msg => {
    if (msg.author.bot || !msg.content.startsWith(commandPrefix)) return;
    let args = msg.content.substr(1).trim().split(' ')
    let cmd = args.shift().toLowerCase();
    msg.channel.send("Message Received: " + cmd + " " + args)

    commandManager.handle(client, msg, cmd, args);
});
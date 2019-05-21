const auth = require('../config/credentials.json').token;
const commandPrefix = require('../config/config.json').commandPrefix;
const commandManager = require('./input/commandManager');
//const mongclient = require('./mongoDB/connect');

const output = require('./output/out');
const Discord = require('discord.js');
const db = require('./mongoDB/dbCommands');
const client = new Discord.Client();

//mongclient.connectDB();
client.login(auth);

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

client.on('message', msg => {
    if (msg.author.bot || !msg.content.startsWith(commandPrefix)) return;
    let args = msg.content.substr(1).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    msg.channel.send("Message Received: " + cmd + " " + args);

    db.GET('http://35.243.224.195:8080/api/memes').then(function(response) {
       console.log("A PROMISING Success! \n", JSON.parse(response).data[0].source);
       let json = JSON.parse(response).data[0].source;
        msg.channel.send(json);
    }, function(error) {
        console.error("Failed!", error);
        msg.channel.send(error);
    });


    //commandManager.handle(client, msg, cmd, args);
});
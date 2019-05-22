/*
Function to add memes to the database
 */
const db = require('../../mongoDB/dbCommands');

exports.run = async (client, message, args) => {

    if(args.length >= 2) {
        db.post('http://35.243.224.195:8080/api/memes', args).then(function (response) {
            //console.log("args: " + args);
            //console.log("response: " + response);
            //let json = JSON.parse(response).data.source;//JSON.parse(response).data[0].source;
            message.channel.send(JSON.parse(response).message);
        }, function (error) {
            console.error("Failed!", error);
            message.channel.send(error);
        });
    } else{
        message.channel.send("Insufficient args, need name and source");
    }
};
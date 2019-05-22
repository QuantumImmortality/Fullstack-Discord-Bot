/*
Function to get meme from the database
 */
const db = require('../../mongoDB/dbCommands');

exports.run = async (client, message, args) => {
    db.get('http://35.243.224.195:8080/api/memes/' + args).then(function(response) {
        console.log("args: " + args);
        console.log("response: " + response);
        //console.log("A PROMISING Success! \n", JSON.parse(response).data);//JSON.parse(response).data[0].source);
        if(JSON.parse(response).data.length) {
            let json = JSON.parse(response).data[0].source;//JSON.parse(response).data[0].source;
            message.channel.send(json);
        }
    }, function(error) {
        console.error("Failed get! ", error);
        message.channel.send(error);
    });
};
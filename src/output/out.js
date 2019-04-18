async function sendMessage(client, message){
    var botChat = client.channels.get("406961766250053653");
    botChat.send(message)
}

module.exports = {
    sendMessage: sendMessage
};
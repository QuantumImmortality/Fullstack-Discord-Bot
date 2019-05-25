/**
 * Send message to the bot chat channel
 * @param client the discord client
 * @param message the desired message to send
 * @returns {Promise<void>}
 */
async function sendMessage(client, message){
    var botChat = client.channels.get("406961766250053653");
    botChat.send(message)
}

module.exports = {
    sendMessage: sendMessage
};
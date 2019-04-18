/*
Function to get meme from the database
 */
exports.run = async (client, message, args) => {
    message.channel.send('GET ' + args);
}
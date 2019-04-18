/*
Function to delete memes from the database
 */
exports.run = async (client, message, args) => {
    message.channel.send('DELETE ' + args);
};
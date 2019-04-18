/*
Function to add memes to the database
 */
exports.run = async (client, message, args) => {
    message.channel.send('ADD ' + args);
};
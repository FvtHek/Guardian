const Discord = require("discord.js");
const config = require('../config.json');


module.exports.run = async (bot, message, args, prefix) => {

    message.channel.send("**Help Menu**:\n" +
                            "\tHelp Menu: " + prefix + "help\n" +
                            "\tList Grizzly Servers: " + prefix + "serverList \n" +
                            "\tServer Information: " + prefix + "serverInfo (GameName)");
}
    
module.exports.help = {
    name: 'help',
    description: 'checks minecraft server status',
}
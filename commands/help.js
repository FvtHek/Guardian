const Discord = require("discord.js");
const config = require('../config.json');


module.exports.run = async (bot, msg, args) => {

    message.channel.send("**Help Menu**:\n" +
                            "\tHelp Menu: " + prefix + "help\n" +
                            "\tList Grizzly Servers: " + prefix + "serverList \n" +
                            "\tServer Information: " + prefix + "serverInfo (GameName)");
    break;
}
    
module.exports.help = {
    name: 'status',
    description: 'checks minecraft server status',
}
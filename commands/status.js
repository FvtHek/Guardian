const Discord = require("discord.js");
const config = require('../config.json');
const mcping = require("mc-ping-updated");

module.exports.run = async (bot, message, args, prefix) => {
    
    var status;

    mcping(config.ip, config.port, function(err, res) {
        if(err) {
            
            bot.user.setStatus('dnd');
            status = 'Server currently offline..';
            bot.user.setActivity( status, { type: 'PLAYING' });

        } else {
            console.log(JSON.stringify(res.description.text));
            bot.user.setStatus('online');
            status = ' ' + res.players.online + '  of  ' + res.players.max + " online";
            bot.user.setActivity(status, { type: 'PLAYING' });
        }
    });
}

module.exports.help = {
    name: 'status',
    description: 'checks minecraft server status',
}
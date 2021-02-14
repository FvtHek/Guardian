const Discord = require("discord.js");
const config = require('../config.json');


module.exports.run = async (bot, msg, args) => {
    
    var query = args[0];
    console.log("https://api.battlemetrics.com/servers?filter[search]=\"" + query + "\"");
    unirest.get("https://api.battlemetrics.com/servers?filter[search]=\"" + query + "\"")
        .end(function (result) {
            var json = JSON.parse(JSON.stringify(result.body));
            if(result.status != 200) {
                message.reply("An error occurred while trying to make the API request!");
            } else {
                console.log(json);
                var i = 1;
                message.channel.send("**Server List for "  + query + "**:");
                json.data.map(data => {
                    message.channel.send( "**Server #"  + i + "**:" + "\n" +
                                       "\tServer Name: " + data.attributes.name + "\n" +
                                            "\tServer ID: " + data.id + "\n" +
                                            "\tGame: " + data.relationships.game.data.id + "\n" +
                                            "\tServer IP: " + data.attributes.ip + "\n" +
                                            "\tPlayers: " + data.attributes.players + "\n" +
                                            "\tMax Players: " + data.attributes.maxPlayers + "\n" +
                                            "\tServer Rank: " + data.attributes.rank);
                    i = i + 1;
                })
            }
        });
    break;
}

module.exports.help = {
    name: 'serverList',
    description: 'shows list of grizzly servers',
}
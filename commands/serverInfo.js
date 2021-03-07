const Discord = require("discord.js");
const config = require('../config.json');


module.exports.run = async (bot, message, args, prefix) => {

    var gamename = args[0];
    unirest.get("https://api.battlemetrics.com/servers/".concat(server_id))
        .end(function (result) {
            //console.log(result.status, result.headers, result.body);
            var json = JSON.parse(JSON.stringify(result.body));
            if(result.status != 200) {
                message.reply("An error occurred while trying to make the API request!");
            } else {
                message.channel.send("**Server Information**:\n" +
                                        "\tGame: " + json.data.relationships.game.data.id + "\n" +
                                        "\tServer id: " + json.data.id + "\n" +
                                        "\tServer name: " + json.data.attributes.name + "\n" +
                                        "\tServer IP: " + json.data.attributes.ip + "\n" +
                                        "\tOfficial: " + json.data.attributes.details.official + "\n" +
                                        "\tMap: " + json.data.attributes.details.map + "\n" +
                                        "\tPlayers: " + json.data.attributes.players + "\n" +
                                        "\tMax Players: " + json.data.attributes.maxPlayers + "\n" +
                                        "\tServer Rank: " + json.data.attributes.rank + "\n" +
                                        "\tPVE Enabled: " + json.data.attributes.details.pve + "\n" +
                                        "\tStatus: " + json.data.attributes.status + "\n");
            }
        });
}

module.exports.help = {
    name: 'serverInfo',
    description: 'checks server info',
}
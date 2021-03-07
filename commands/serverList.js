const Discord = require("discord.js");
const config = require('../config.json');

// add a list of text/speach channels in a new category and add a support channel all containg the new game name of course
// make sure there is a new role added with the name game as the title, this needs to be added in the role select as well
const fs = require('fs');
const path = './Games/games.json';

module.exports.run = async (bot, message, args, prefix) => {
    let games = {
        name: args[0],
        ip: args[1],
        port: args[2], 
        emoticon: args[3]
    };
    let data = JSON.stringify(games);
    var game_exists = false;
    games_list = [];
    try {
        if (fs.existsSync(path)) {
            fs.readFile(path, (err, read) => {
                if (err) throw err;
                let read_games = JSON.parse(read);
                for(var i = 0; i < read_games.length; i++) {
                    var game_id = read_games[i];
                    games_list.push(game_id.name)
                }
                message.channel.send(games_list);
            })
        }
    } catch(err) {
        console.error(err)
    }


}

module.exports.help = {
    name: 'serverList',
    description: 'shows list of grizzly servers',
}
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
    try {
        if (fs.existsSync(path)) {
            fs.readFile(path, (err, read) => {
                if (err) throw err;
                let read_games = JSON.parse(read);
                console.log(read_games);
                for(var i = 0; i < read_games.length; i++) {
                    var game_id = read_games[i];
                    console.log(game_id.name)
                    if (game_id.name == args[0]) {
                        var game_exists = true;
                    } 
                }
                if (game_exists == true) {
                message.channel.send("Game already exists")
                } else {
                        read_games.push(JSON.parse(data))
                        fs.writeFile(path, JSON.stringify(read_games), function(err){
                        if (err) throw err;
                        message.channel.send(args[0] + " has been added");
                      });
                }
            })
        }
        else {
            fs.writeFileSync(path, data);
            message.channel.send(args[0] + "and games file have been added");
        }
    } catch(err) {
        console.error(err)
    }


}
module.exports.help = {
    name: 'addGame',
    description: 'Add a game to json array',
}
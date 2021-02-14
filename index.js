var Discord = require('discord.js');
var unirest = require('unirest');    // npm install unirest
var logger = require('winston');     // npm install winston
const {prefix, token} = require('./config.json');
const fs = require('fs');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Some files in the command folder were not found! Try adding some");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded succesfully!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.login(token);

bot.on("ready", async () => {
    console.log(`${bot.user.username} is active!`)
    update();
    bot.setInterval(update,5000);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

let prefix = "&";
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);

});

function update() {
    let update = bot.commands.get('status');
    if(update) update.run(bot);
}

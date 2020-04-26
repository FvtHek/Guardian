const Discord = require("discord.js");
const config = require('../config.json');
const fs = require('fs');
const path = './files/usernames.json'
 

module.exports.run = async (Guardian, msg, args) => {
    if (message.content.StartsWith ("&bind")) {
        editedmessage = message.content.slice (6);

        client.msgs [message.member.id] = {
            MCusername: message.content
        }
        try {
            if (fs.existsSync(path)) {
             //file exists
              fs.appendFile (path, JSON.stringify (client.msgs, null, 4), err => {
                  if (err) throw err;
                  message.channel.send ("username added");
              });
            } else {
              fs.writeFile (path, JSON.stringify (client.msgs, null, 4), err => {
                if (err) throw err;
                message.channel.send ("new file created");
                message.channel.send ("username added");
            });
            }
          } catch(err) {
            console.error(err)
          }
    }
    
}

module.exports.help = {
    name: 'list',
    description: 'Bind discord ID to minecraft name',
}
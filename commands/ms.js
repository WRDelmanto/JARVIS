//System Libraries
const Discord = require('discord.js');
const ms = require('ms');
const ping = require('minecraft-server-util');

//Bot Variables
const Delete_Message_Timeout = '50';
const Bot_Color = '0x008080';

//HELP
module.exports = {
  name: 'ms_embed',
  description: 'Display Information on a Minecraft Server',
  execute(message, args) {
    if (!args[1]) {
      message.channel.send('You must type a minecraft server ip');
    }
    if (!args[2]) {
      args[2] = '25565'; //return message.channel.send('You must type a minecraft server port')
    }

    ping(String(args[1]), parseInt(args[2]), (error, reponse) => {
      if (error) throw error;
      console.log(Response);
      //const minecraft_server = new Discord.MessageEmbed()
      // .setTitle('Server Status')
      // .addField('Server IP', reponse.host)
      // .addField(
      //   'Online/Max Players',
      //   reponse.onlinePlayers + '/' + reponse.maxPlayers
      //)
      // .addField('Server Version', reponse.version)
      //.setColor(Bot_Color);

      //message.channel.send(minecraft_server);
      delete { timeout: Delete_Message_Timeout };
    });
  },
};

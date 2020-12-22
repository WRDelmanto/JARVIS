//System Libraries
const Discord = require('discord.js');

//Bot Variables
const prefix = 'j!';
const Delete_Message_Timeout = '50';
const Bot_Color = '0x008080';

//Bot Creator Image
const Bot_Image_1024x1024_URL = 'https://i.imgur.com/iGrYXKT.png';

//HELP
module.exports = {
  name: 'pv',
  description: 'Help Private Message',
  execute(message, args) {
    const helper = new Discord.MessageEmbed()
      .setAuthor('What can I do for you today sir?', Bot_Image_1024x1024_URL)
      .addField(prefix + 'pv', 'Send this help command as a private message.')
      .addField(prefix + 'DJ', 'Make you a DJ!.')
      .addField(prefix + 'spoll', 'Create a simple YES or NO poll.')
      .addField(prefix + 'coinflip', 'Heads or Tails.')
      .addField(prefix + 'ms', 'Show information of a Minecraft Server.')
      .addField(
        prefix + 'clear',
        'Delete some lines from your current text channel.'
      )
      .addField(
        prefix + 'server',
        `Reveal ${message.channel.guild.name} information.`
      )
      .addField(prefix + 'info', 'Reveal J.A.R.V.I.S. information.')
      //.addField(prefix + 'poll', 'Create a augmented poll')
      .setColor(Bot_Color);
    message.author.send(helper);
    message.delete({ timeout: Delete_Message_Timeout });
  },
};

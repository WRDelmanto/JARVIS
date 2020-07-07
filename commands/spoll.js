//System Libraries
const Discord = require('discord.js');

//Bot Variables
const prefix = 'jh!';
const Delete_Message_Timeout = '50';
const Bot_Color = '0x008080';

//SPOLL
module.exports = {
  name: 'spoll',
  description: 'Yes or No poll',
  execute(message, args) {
    if (!args[1]) {
      const simple_poll = new Discord.MessageEmbed()
        .setTitle('Initiate Simple Poll')
        .setColor(Bot_Color)
        .setFooter(
          'Please type <' +
            prefix +
            'spoll Does Palladium increases Tony`s blood toxicity?> for example'
        );
      message.channel.send(simple_poll);
    } else {
      let msgArgs = args.slice(1).join(' ');

      const spoll_embed = new Discord.MessageEmbed()
        .setTitle('📋 ' + msgArgs + ' 📋')
        .setColor(Bot_Color);

      message.channel.send(spoll_embed).then((messageReaction) => {
        messageReaction.react('❌').then(() => messageReaction.react('✅'));
      });
      message.delete({ timeout: Delete_Message_Timeout });
    }
  },
};

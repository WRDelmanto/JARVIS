//System Libraries
const Discord = require('discord.js');

//DJ
module.exports = {
  name: 'DJ',
  description: 'Assigning the DJ roll',
  execute(message, args) {
    if (!message.guild.roles.cache.find((role) => role.name === 'DJ')) {
      message.channel.send('There is no roll called DJ, sir.');
    } else if (message.member.roles.cache.find((role) => role.name === 'DJ')) {
      message.channel.send('Sir, you already are a DJ!');
    } else {
      const Role = message.guild.roles.cache.find((role) => role.name === 'DJ');
      const Member = message.member;

      Member.roles.add(Role.id);

      message.channel.send('Enjoy yourself, sir.');
      message.channel.send('You are a DJ now!');
    }
  },
};

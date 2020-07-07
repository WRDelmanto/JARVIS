//System Libraries
const Discord = require('discord.js');

//Bot Variables
const prefix = 'j!';

//TEST
module.exports = {
  name: 'clear',
  description: 'Clear some lines in current channel',
  execute(message, args) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      message.channel.send('Sir, You are not authorized to access this area.');
      message.channel.send('Require: MANAGE_MESSAGES permission');
    } else if (!args[1]) {
      message.channel.send('Please type <' + prefix + 'clear 10> for example');
    } else if (args[1] > 100)
      message.channel.send('Cannot delete more than 100 lines');
    else message.channel.bulkDelete(args[1]);
  },
};

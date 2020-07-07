//System Libraries
const Discord = require('discord.js');

//TEST
module.exports = {
  name: 'test',
  description: 'Testing New Commands!',
  execute(message, args) {
    message.channel
      .send('Working on it, sir. This is a prototype.')
      .then(message.channel.send('Flight Power Restored.'));
  },
};

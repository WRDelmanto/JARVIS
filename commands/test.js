//System Libraries
const Discord = require('discord.js');
const dateformat = require('dateformat');

//Bot Variables
const Bot_Color = '0x008080';

//TEST
module.exports = {
  name: 'test',
  description: 'Testing New Commands!',
  execute(message, args) {
    message.channel.send('Working on it, sir. This is a prototype.');

    message.channel.send('Flight Power Restored.');
  },
};

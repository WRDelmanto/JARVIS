//System Libraries
const Discord = require('discord.js');

//Bot Heads / Tails Images
const Heads_Image_URL = 'https://i.imgur.com/UlQfOQ3.png';
const Heads_Image = new Discord.MessageAttachment('./images/Heads 237x237.png');
const Tails_Image_URL = 'https://i.imgur.com/izAwCxk.png';
const Tails_Image = new Discord.MessageAttachment('./images/Tails 231x231.png');
//---------------------------------------------------------------------------------

//COINFLIP
module.exports = {
  name: 'coinflip',
  description: 'Heads or Tails',
  execute(message, args) {
    var choices = ['Heads', 'Tails'];
    var Heads_or_Tails = choices[Math.floor(Math.random() * choices.length)];

    if (Heads_or_Tails === 'Heads') {
      message.channel.send(Heads_Image);
    } else {
      message.channel.send(Tails_Image);
    }
  },
};

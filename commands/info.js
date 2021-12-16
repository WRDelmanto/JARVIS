//System Libraries
const Discord = require('discord.js');

//Bot Variables
const prefix = 'j!';
const Delete_Message_Timeout = '50';
const Bot_Creator = 'Besides Tony, WRDelmanto';
const Bot_Info_Spaces = '                                         ';
const Bot_Color = '0x008080';
var version = '1.7.0.0';
//             W.X.Y.Z
//             W = First bot
//               X = How many functions the bot have
//                 Y = How many sub functions the bot have
//                   Z = How many modifications after the last function was added
//---------------------------------------------------------------------------------

//Bot Creator Image
const Bot_Creator_Image_URL = 'https://i.imgur.com/JtScC0W.jpg';
const Bot_Creator_Image = new Discord.MessageAttachment(
  './images/Discord Bot Creator Image 542x542.png'
);
//---------------------------------------------------------------------------------

//Bot Images
const Bot_Image_1024x1024_URL = 'https://i.imgur.com/iGrYXKT.png';

//Info
module.exports = {
  name: 'info',
  description: 'Reveals J.A.R.V.I.S. Information',
  execute(message, args) {
    if (!args[1]) {
      const info = new Discord.MessageEmbed()
        .setAuthor('J.A.R.V.I.S. Operational Matrix', Bot_Image_1024x1024_URL)
        .addField(prefix + 'info up', 'Check if J.A.R.V.I.S. is up')
        .addField(
          prefix + 'info creator',
          'We all know Tony needed a little help'
        )
        .setColor(Bot_Color)
        .setFooter(
          `Started out, J.A.R.V.I.S. was just a natural language UI. Now he runs ${message.guild.name}. He runs more of the business than anyone besides Pepper.${Bot_Info_Spaces}J.A.R.V.I.S. ${version}`
        );
      message.delete({ timeout: Delete_Message_Timeout });

      message.channel.send(info);
    } else if (args[1] === 'up') {
      message.channel.send(
        message.author.username + ' - J.A.R.V.I.S., are you up?'
      );
      message.channel.send('- For you sir, always.');
    } else if (args[1] === 'creator') {
      const Info_Creator = new Discord.MessageEmbed()
        .setTitle('Creator Information')
        .addField('Creator: ', Bot_Creator)
        .setThumbnail(Bot_Creator_Image_URL)
        .setColor(Bot_Color);
      message.channel.send(Info_Creator);
    } else message.channel.send('Invalid Arguments');
  },
};

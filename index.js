//

//System Libraries
const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const ping = require('minecraft-server-util');

//Bot Variables
const prefix = 'j!';
//
const Delete_Message_Timeout = '50';
const Bot_Creator = 'Besides Tony, WRDelmanto';
const Bot_Info_Spaces = '                                         ';
const Bot_Color = '0x008080';
var version = '1.5.0';
//              X.Y.Z
//              X = First bot
//                Y = How many functions the bot have
//                  Z = How many modifications after the last function was added

//Bot Creator Image
const Bot_Creator_Image_URL = 'https://i.imgur.com/UraTTgc.jpg';
const Bot_Creator_Image = new Discord.MessageAttachment(
  './images/Discord Bot Creator Image.png'
);

//Bot Images
const Bot_Image_1280x720_URL = 'https://i.imgur.com/ubo9F39.png';
const Bot_Image_1280x720 = new Discord.MessageAttachment(
  './images/Discord Bot 1280x720.png'
);
const Bot_Image_1024x1024_URL = 'https://i.imgur.com/iGrYXKT.png';
const Bot_Image_1024x1024 = new Discord.MessageAttachment(
  './images/Discord Bot 1024x1024.png'
);
const Bot_Image_128x128_URL = 'https://i.imgur.com/RAfx55L.png';
const Bot_Image_128x128 = new Discord.MessageAttachment(
  './images/Discord Bot 128x128.png'
);
const Bot_Image_Right_URL = 'https://i.imgur.com/JyszwnB.png';
const Bot_Image_Right = new Discord.MessageAttachment(
  './images/Discord Bot Right.png'
);
const Bot_Image_Left_URL = 'https://i.imgur.com/xcLeNj5.png';
const Bot_Image_Left = new Discord.MessageAttachment(
  './images/Discord Bot Left.png'
);

bot.on('ready', () => {
  console.clear();
  console.log('- J.A.R.V.I.S. is Online');
  bot.user.setActivity('j!help', { type: 'LISTENING' }).catch(console.error);
});

//
//
//
//
//
//
//
//
//
//

bot.on('message', (message) => {
  let args = message.content.substring(prefix.length).split(' ');

  switch (args[0]) {
    case 'help':
      const helper = new Discord.MessageEmbed()
        .setTitle('**What can I do for you today sir?**')
        .addField(prefix + 'spoll', 'Create a simple YES or NO poll')
        .addField(
          prefix + 'clear',
          'Delete some lines from your current text channel'
        )
        .addField(prefix + 'ms', 'Show information of a Minecraft Server')
        .addField(prefix + 'info', 'Reveal J.A.R.V.I.S. information')
        //
        .setColor(Bot_Color);
      message.channel.send(helper);
      message.delete({ timeout: Delete_Message_Timeout });
      break;

    case 'spoll':
      const simple_poll = new Discord.MessageEmbed()
        .setTitle('Initiate Simple Poll')
        .setColor(Bot_Color)
        .setFooter(
          'Please type <' +
            prefix +
            'spoll Does Palladium increases Tony`s blood toxicity?> for example'
        );

      if (!args[1]) {
        message.channel.send(simple_poll);
        break;
      }

      let msgArgs = args.slice(1).join(' ');

      message.channel
        .send('📋 ' + '**' + msgArgs + '**' + ' 📋')
        .then((messageReaction) => {
          messageReaction.react('❌');
          messageReaction.react('✅');
          message.delete({ timeout: Delete_Message_Timeout });
        });
      break;

    case 'info':
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
        const Info_creator = new Discord.MessageEmbed()
          .setTitle('Creator Information')
          .addField('Creator: ', Bot_Creator)
          .setThumbnail(Bot_Creator_Image_URL)
          .setColor(Bot_Color);
        message.channel.send(Info_creator);
      } else message.channel.send('Invalid Arguments');
      break;

    case 'clear':
      if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        message.channel.send(
          'Sir, You are not authorized to access this area.'
        );
        message.channel.send('Require: MANAGE_MESSAGES permission');
      } else if (!args[1]) {
        message.channel.send(
          'Please type <' + prefix + 'clear 10> for example'
        );
      } else if (args[1] > 100)
        message.channel.send('Cannot delete more than 100 lines');
      else message.channel.bulkDelete(args[1]);
      break;

    case 'ms':
      if (!args[1]) {
        message.channel.send('You must type a minecraft server ip');
      }
      if (!args[2]) {
        args[2] = '25565'; //return message.channel.send('You must type a minecraft server port')
      }

      ping(args[1], parseInt(args[2]), (error, reponse) => {
        if (error) throw error;
        const minecraft_server = new Discord.MessageEmbed()
          .setTitle('Server Status')
          .addField('Server IP', reponse.host)
          .addField(
            'Online/Max Players',
            reponse.onlinePlayers + '/' + reponse.maxPlayers
          )
          .addField('Server Version', reponse.version)
          .setColor(Bot_Color);

        message.channel.send(minecraft_server);
      });
      break;
  }
});

bot.login(process.env.token);

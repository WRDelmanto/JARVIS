//

//System Libraries
const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const ping = require('minecraft-server-util');
//---------------------------------------------------------------------------------

//Command Handler
const fs = require('fs');
const { get } = require('http');
bot.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync('./commands/')
  .filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}
//---------------------------------------------------------------------------------

//Bot Variables
const prefix = 'j!';
//
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
//---------------------------------------------------------------------------------

//BOT ON MESSAGE / ACTIVITY / STATUS
bot.on('ready', () => {
  console.clear();
  bot.user.setStatus('online'); //idle, dnd, online, invisible
  bot.user
    .setActivity(`${prefix}help`, { type: 'LISTENING' })
    .catch(console.error); //WATCHING, LISTENING, PLAYING, STREAMING
  console.log('- J.A.R.V.I.S. is Online');
});
//---------------------------------------------------------------------------------

//WELLCOME CHANNEL/MESSAGE

//---------------------------------------------------------------------------------

//SERVER STATS
let countChannel = {
  member: '723535345836359692',
  serverID: '318468078360854538',
};

bot.on('guildMemberAdd', (member) => {
  if (member.guild.id !== countChannel.serverID) return; // Avoid leaking.

  bot.channels.cache
    .get(countChannel.member)
    .setName(
      `👤 Members: ${
        member.guild.members.cache.filter((m) => !m.user.bot).size
      }`
    );
});

bot.on('guildMemberRemove', (member) => {
  if (member.guild.id !== countChannel.serverID) return; // Avoid leaking.

  bot.channels.cache
    .get(countChannel.member)
    .setName(
      `👤 Members: ${
        member.guild.members.cache.filter((m) => !m.user.bot).size
      }`
    );
});
//---------------------------------------------------------------------------------

//BOT COMMANDS
bot.on('message', async (message) => {
  let args = message.content.substring(prefix.length).split(' ');

  switch (args[0]) {
    //HELP
    case 'help':
      bot.commands.get('help').execute(message, args);
      break;
    //---------------------------------------------------------------------------------

    //SPOLL
    case 'spoll':
      bot.commands.get('spoll').execute(message, args);
      break;
    //---------------------------------------------------------------------------------

    //INFO
    case 'info':
      bot.commands.get('info').execute(message, args);
      break;
    //---------------------------------------------------------------------------------

    //CLEAR
    case 'clear':
      bot.commands.get('clear').execute(message, args);
      break;
    //---------------------------------------------------------------------------------

    //MS
    case 'ms':
      bot.commands.get('ms_embed').execute(message, args);
      break;
    //---------------------------------------------------------------------------------

    //COINFLIP
    case 'coinflip':
      bot.commands.get('coinflip').execute(message, args);
      break;
    //---------------------------------------------------------------------------------

    //TEST

    //---------------------------------------------------------------------------------
  }
});
//---------------------------------------------------------------------------------

bot.login(process.env.token);

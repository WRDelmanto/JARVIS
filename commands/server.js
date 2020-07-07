//System Libraries
const Discord = require('discord.js');
const dateformat = require('dateformat');

//Bot Variables
const Delete_Message_Timeout = '50';
const Bot_Color = '0x008080';

//TEST
module.exports = {
  name: 'server',
  description: 'Shows Information about the current server',
  execute(message, args) {
    let icon = message.guild.iconURL({ size: 2048 });

    let region = {
      brazil: 'Brazil',
      'eu-central': 'Central Europe',
      singapore: 'Singapore',
      london: 'London',
      russia: 'Russia',
      japan: 'Japan',
      hongkong: 'Hongkong',
      sydney: 'Sydney',
      'us-central': 'U.S. Central',
      'us-east': 'U.S. East',
      'us-south': 'U.S. South',
      'us-west': 'U.S. West',
      'eu-west': 'Western Europe',
    };

    // Members
    let member = message.guild.members;
    let offline = member.cache.filter(
        (m) => m.user.presence.status === 'offline' && !m.user.bot
      ).size,
      online = member.cache.filter(
        (m) => m.user.presence.status === 'online' && !m.user.bot
      ).size,
      idle = member.cache.filter(
        (m) => m.user.presence.status === 'idle' && !m.user.bot
      ).size,
      dnd = member.cache.filter(
        (m) => m.user.presence.status === 'dnd' && !m.user.bot
      ).size,
      robot = member.cache.filter((m) => m.user.bot).size,
      total = message.guild.memberCount;

    // Channels
    let channels = message.guild.channels;
    let text = channels.cache.filter((r) => r.type === 'text').size,
      vc = channels.cache.filter((r) => r.type === 'voice').size,
      category = channels.cache.filter((r) => r.type === 'category').size,
      totalchan = channels.cache.size;

    // Region
    let location = region[message.guild.region];

    // Date
    let x = Date.now() - message.guild.createdAt;
    let h = Math.floor(x / 86400000); // 86400000, 5 digits-zero.
    let created = dateformat(message.guild.createdAt);

    const embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, icon)
      .setColor(Bot_Color)
      .addField('Date Created', `${created} \n**${h}** day(s) ago`)
      .addField(
        `Members [${total}]`,
        `Online: ${online} \nIdle: ${idle} \nDND: ${dnd} \nOffline: ${offline} \nBots: ${robot}`,
        true
      )
      .addField(
        `Channels [${totalchan}]`,
        `Text: ${text} \nVoice: ${vc} \nCategory: ${category}`,
        true
      )
      .addField('Region', location)
      .addField('Owner', `${message.guild.owner.user.tag}`)
      .setFooter(`Server ID: ${message.guild.id}`);
    message.channel.send(embed);
    message.delete({ timeout: Delete_Message_Timeout });
  },
};

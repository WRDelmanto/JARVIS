//Just open the Terminal and write "node ." to start J.A.R.V.I.S.

//System Libraries
const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const ping = require('minecraft-server-util');
const dateformat = require('dateformat');
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
const token = 'OTIxMTUzNDIyNjEzNDE4MDA0.Ybuw-g.JXnZMmNCL6GRTrmEyV_e_-V5vUE';
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
bot.on('guildMemberAdd', (member) => {
	const Welcome_Channel = member.guild.channels.cache.find(
		(channel) => channel.name === '✨┆welcome'
	);

	if (!Welcome_Channel) return;

	const Welcome_Embed = new Discord.MessageEmbed()
		.setAuthor(
			member.user.username,
			member.user.displayAvatarURL({ dynamic: true })
		)
		.addField(
			`- Sir, it seems like another guest has arrived.`,
			`- Please, ${member}, make yourself at home.`
		)
		.setColor(Bot_Color);

	Welcome_Channel.send(Welcome_Embed);
});
//---------------------------------------------------------------------------------

//GOODBYE CHANNEL/MESSAGE
bot.on('guildMemberRemove', (member) => {
	const Goodbye_Channel = member.guild.channels.cache.find(
		(channel) => channel.name === '❌┆goodbye'
	);

	if (!Goodbye_Channel) return;

	const Goodbye_Embed = new Discord.MessageEmbed()
		.setAuthor(
			member.user.username,
			member.user.displayAvatarURL({ dynamic: true })
		)
		.addField(
			`- Sir, it seems like another guest has left.`,
			`- The member ${member} was added to the Clean Slate Protocol.`
		)
		.setColor(Bot_Color);

	Goodbye_Channel.send(Goodbye_Embed);
});
//---------------------------------------------------------------------------------

//SERVER STATS
let countChannel = {
	member: '728275581543645236',
	serverID: '725053854814830603',
};

bot.on('guildMemberAdd', (member) => {
	if (member.guild.id !== countChannel.serverID) return; // Avoid leaking.

	bot.channels.cache
		.get(countChannel.member)
		.setName(
			`👤 ┆ Members: ${
				member.guild.members.cache.filter((m) => !m.user.bot).size
			}`
		);
});

bot.on('guildMemberRemove', (member) => {
	if (member.guild.id !== countChannel.serverID) return; // Avoid leaking.

	bot.channels.cache
		.get(countChannel.member)
		.setName(
			`👤 ┆ Members: ${
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

		//SERVER
		case 'server':
			bot.commands.get('server').execute(message, args);
			break;
		//---------------------------------------------------------------------------------

		//RULES
		case 'rules':
			bot.commands.get('rules').execute(message, args);
			break;
		//---------------------------------------------------------------------------------

		//DJ
		case 'dj':
			bot.commands.get('DJ').execute(message, args);
			break;

		case 'DJ':
			bot.commands.get('DJ').execute(message, args);
			break;
		//---------------------------------------------------------------------------------

		//PV
		case 'pv':
			bot.commands.get('pv').execute(message, args);
			break;
		//---------------------------------------------------------------------------------

		//Suggestion
		case 'suggestion':
			bot.commands.get('suggestion').execute(message, args);
			break;
		//---------------------------------------------------------------------------------

		//TEST
		case 'test':
			bot.commands.get('test').execute(message, args);
			break;
		//---------------------------------------------------------------------------------
	}
});
//---------------------------------------------------------------------------------

//BOT LOGIN
bot.login(token);
//---------------------------------------------------------------------------------

// Goodbye Message = 'As always sir, a great pleasure watching you work.'
// message.author.username
//.addField('Current Server', message.guild.name, true)
//"Sir, please may I request just a few hours to calibrate-"
//"As you wish, sir. I've also prepared a safety briefing for you to entirely ignore."
//"Good evening, Colonel. Can I give you a lift?"
//"Started out, J.A.R.V.I.S. was just a natural language UI. Now he runs the Iron Legion. He runs more of the business than anyone besides Pepper."
//"I'll continue to run variations on the interface, but you should probably prepare for your guests. I'll notify you if there are any developments."
//"Enjoy yourself, sir."
//"I believe your intentions to be hostile."
//"That's J.A.R.V.I.S.. He runs the house."
//"J.A.R.V.I.S., are you up?"
//"For you sir, always."

// Role verification
//if(!message.member.roles.find(r.name === 'Rolename')){
//    message.channel.send('This requires the role: Rolename')
// }

// Role verification New?
//if(!message.member.roles.cache.find(role => role.name === 'ADM')){
//message.channel.send('This requires the role: ADM');
//}

// Permission verification
//if(!message.member.hasPermission('Administrator')){
//    message.channel.send('This requires the permission: Administrator')

//Online Members
// First we use guild.members.fetch to make sure all members are cached
//message.guild.members.fetch().then((fetchedMembers) => {
//const totalOnline = fetchedMembers.filter(
//  (member) => member.presence.status === 'online'
// );
// We now have a collection with all online member objects in the totalOnline variable
//message.channel.send(
//  `There are currently ${totalOnline.size} members online in this guild!`
// );
// });

//---------------------------------------------------------------------------------
//WELLCOME CHANNEL/MESSAGE
//bot.on('guildMemberAdd', (member) => {
//  const Welcome_Channel = member.guild.channels.cache.find(
//    (channel) => channel.name === 'welcome'
//);

//  if (!Welcome_Channel) return;

//  Welcome_Channel.send(`- Sir, it seems like another guest has arrived.`);
//Welcome_Channel.send(`- Please, ${member}, make yourself at home.`);
//});
//---------------------------------------------------------------------------------

//Role Add on MemberADD
//const Role = member.guild.roles.cache.find((role) => role.name === 'DJ');
//member.roles.add(Role);
//---------------------------------------------------------------------------------

//Bot Owner (Not Working)
//.setBotOwner('202948020009041920');
//---------------------------------------------------------------------------------

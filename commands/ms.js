//System Libraries
const Discord = require('discord.js');
const ms = require('ms');
const ping = require('minecraft-server-util');

//Bot Variables
const Delete_Message_Timeout = '50';
const Bot_Color = '0x008080';

//MS
module.exports = {
	name: 'ms_embed',
	description: 'Display Information on a Minecraft Server',
	execute(message, args) {
		if (!args[2]) {
			args[2] = '25565'; //return message.channel.send('You must type a minecraft server port')
		}
		if (!args[1]) {
			message.channel.send('You must type a minecraft server ip');
		} else {
			ping(String(args[1]), parseInt(args[2]), (error, response) => {
				if (error) throw error;
				const minecraft_server = new Discord.MessageEmbed()
					.setTitle('Server Status')
					.addField('Server IP', response.host)
					.addField(
						'Online/Max Players',
						response.onlinePlayers + '/' + response.maxPlayers
					)
					.addField('Server Version', response.version)
					.setColor(Bot_Color);

				message.channel.send(minecraft_server);
				delete { timeout: Delete_Message_Timeout };
			});
		}
	},
};

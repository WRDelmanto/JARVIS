//System Libraries
const Discord = require('discord.js');

//Bot Variables
const prefix = 'j!';
const Delete_Message_Timeout = '50';
const Bot_Color = '0x008080';

//Suggestion
module.exports = {
	name: 'suggestion',
	description: 'Create a Embed Suggestion',
	execute(message, args) {
		const Suggestion_Channel = message.guild.channels.cache.find(
			(c) => c.name === '📝┆suggestions'
		);
		if (!Suggestion_Channel)
			return message.channel.send('Suggestions Channel Does Not Exists!');

		if (!args[1]) {
			const Suggestion_Embed_Helper = new Discord.MessageEmbed()
				.setTitle('How to Create a Suggestion')
				.setColor(Bot_Color)
				.setFooter(
					'Please type <' +
						prefix +
						'suggestion Create a new element to substitute the Palladium> for example.'
				);
			message.channel.send(Suggestion_Embed_Helper);
		} else {
			let Suggestion_Args = args.slice(1).join(' ');

			const Suggestion_embed = new Discord.MessageEmbed()
				.setColor(Bot_Color)
				.setAuthor(
					message.author.tag,
					message.author.displayAvatarURL({ dynamic: true })
				)
				.setDescription(Suggestion_Args);

			Suggestion_Channel.send(Suggestion_embed)
				.then((msg) => {
					msg.react('✅');
					msg.react('❌');
					message.delete();
				})
				.catch((err) => {
					throw err;
				});
		}
	},
};

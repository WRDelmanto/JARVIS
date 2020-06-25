//Just open the Terminal and write "node ." to start J.A.R.V.I.S.

const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const ping = require('minecraft-server-util');

const prefix = 'j!';

var version =  '1.5.0'
//              X.Y.Z 
//              X = First bot
//                Y = How many functions the bot have
//                  Z = How many modifications after the last function was added

const Bot_Creator = 'Besides Tony, WRDelmanto'
const Bot_Color = '0x008080'

bot.on('ready', () =>{
    console.clear();
    console.log('- J.A.R.V.I.S. is Online');
    bot.user.setActivity('j!help', {type: 'LISTENING'}).catch(console.error);
})

bot.on('message', message=>{

    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'help':
            const helper = new Discord.MessageEmbed()
            .setTitle('**What can I do for you today sir?**')
            .addField(prefix + 'spoll', 'Create a simple YES or NO poll')
            .addField(prefix + 'clear', 'Delete some lines from your current text channel')
            .addField(prefix + 'ms', 'Show information of a Minecraft Server')
            .addField(prefix + 'info', 'Reveal J.A.R.V.I.S. information')
            //.addField(prefix + 'poll', 'Create a augmented poll')
            //.addField('Current Server', message.guild.name, true)
            .setColor(Bot_Color)
            .setFooter('J.A.R.V.I.S. ' + version)
            //.setFooter('Creator: ' + Bot_Creator)
            message.channel.send(helper);
        break;

        case 'spoll':
            const simple_poll = new Discord.MessageEmbed()
            .setTitle('Initiate Simple Poll')
            .setColor(Bot_Color)
            .setFooter(prefix + 'spoll to initiate a simple YES or NO poll')

            if (!args[1]){
                message.channel.send(simple_poll)
                break;
            }

            let msgArgs = args.slice(1).join(' ');

            message.channel.send("📋 " + "**" + msgArgs + "**" + " 📋").then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
                message.delete({ timeout: 1000 }).catch(console.error);
     
            });
        break;

        case 'info':
            if(!args[1]){
                const info = new Discord.MessageEmbed()
                .setTitle('Info Menu')
                .addField(prefix + 'info up', 'Check if J.A.R.V.I.S. is up')
                .addField(prefix + 'info creator', 'We all know Tony needed a little help')
                .setFooter('J.A.R.V.I.S. ' + version)

                message.channel.send(info)
            }

            else if(args[1] === 'up'){
                    message.channel.send(message.author.username + ' - J.A.R.V.I.S., are you up?');
                    message.channel.send('- For you sir, always.');}
                else if (args[1] === 'creator'){
                        const Info_creator = new Discord.MessageEmbed()
                        .setTitle('Creator Information')
                        .addField('Creator: ', (Bot_Creator))
                        .setThumbnail(message.author.displayAvatarURL())
                        .setColor(Bot_Color)
                        message.channel.send(Info_creator);}
                    else
                        message.channel.send('Invalid Arguments');
        break;

        case 'clear':
            if(!args[1]){
                message.channel.send('Please type <' + prefix + 'clear 10> for example')}
                else if (args[1] > 100)
                        message.channel.send('Cannot delete more than 100 lines')
                    else
                        message.channel.bulkDelete(args[1]);
        break;

        case 'ms':
 
            if(!args[1]) return message.channel.send('You must type a minecraft server ip')
            if(!args[2]){
                args[2] = '25565' //return message.channel.send('You must type a minecraft server port')
            }
 
            ping(args[1], parseInt(args[2]), (error, reponse) =>{
                if(error) throw error
                const minecraft_server = new Discord.MessageEmbed()
                .setTitle('Server Status')
                .addField('Server IP', reponse.host)
                .addField('Online/Max Players', reponse.onlinePlayers + '/' + reponse.maxPlayers)
                .addField('Server Version', reponse.version)
                .setColor(Bot_Color)
               
                message.channel.send(minecraft_server)
            })
        break

    }
})

bot.login(process.env.token);

// Goodbye = 'As always sir, a great pleasure watching you work.'
// message.author.username
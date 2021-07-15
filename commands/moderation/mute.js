const { MessageEmbed } = require("discord.js")
const ms = require("ms");

module.exports.run = async (client, message, args) => {
    let user = message.guild.members.cache.get(message.mentions.users.first().id);
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
    let MuteTime = (args[1] || '60s');

    if (!muteRole) {
        muteRole = await message.guild.roles.create ({
        data: {
            name: 'Muted',
            color: '#000',
            permissions: []
        }    
        });

      message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.updateOverwrite(muteRole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              CONNECT: false
          });
       });
      }

      await user.roles.add(muteRole.id);
      message.channel.send(`<@${user.id}> est mute pendant ${ms(ms(MuteTime))}.`);
      
      setTimeout(() => {
        user.roles.remove(muteRole.id);
      }, ms(MuteTime));
    };

module.exports.help = {
    name: "mute",
    aliases: ['mute'],
    description: "Mute un utilisateur",
    category: 'moderation',
    cooldown: 10,
    usage: '<@user> <time>',
    isUserAdmin: true,
    permissions: true,
    args: true
};

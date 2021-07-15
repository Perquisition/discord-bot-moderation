const { MessageEmbed } = require("discord.js");
const targetChannelId = 'ID de votre salon caché';
const {Manager} = require('discord-autorole-badges');

module.exports = async(client, member) => {

  const embed = new MessageEmbed()
        .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
        .setDescription(`+ Bienvenue <@${member.id}> 
                         + Merci de regarder ${member.guild.channels.cache.get(targetChannelId).toString()}
                         + Nous sommes maintenant ${member.guild.memberCount}`)
        .setThumbnail("https://cdn.discordapp.com/attachments/846119855056879627/849736402593906718/logo.png")
        .setColor("#5DFF00")
        .setFooter("Un utilisateur a rejoint")
        .setTimestamp();
        

        client.channels.cache.get('ID de votre salon caché').send(embed);

}

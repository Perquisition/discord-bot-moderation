const { MessageEmbed } = require("discord.js");
module.exports = (client, member) => {

    const embed = new MessageEmbed()
        .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
        .setDescription(`- Un utilisateur nous a quitté <@${member.id}> 
                         - Nous sommes maintenant ${member.guild.memberCount}`)
                         .setThumbnail("*ping")
        .setColor("#FF003A")
        .setFooter("Un utilisateur a quitté")
        .setThumbnail("https://cdn.discordapp.com/attachments/846119855056879627/849736402593906718/logo.png")
        .setTimestamp();

        client.channels.cache.get('ID de votre salon caché').send(embed);

}

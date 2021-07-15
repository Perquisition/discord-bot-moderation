const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
    message.channel.send(new Discord.MessageEmbed()
        .setColor('560000')
        .addFields(
            { name: '🕒 Je suis en ligne depuis :', value: (Math.round(client.uptime / (1000 * 60 * 60))) + " Heure(s), " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minute(s) et " + (Math.round(client.uptime / 1000) % 60) + " seconde(s)"  , inline: true },
        )
    )

};

module.exports.help = {
                name: "uptime",
                aliases: ['uptime'],
                category: 'misc',
                description: "uptime !",
                cooldown: 10,
                usage: '',
                isUserAdmin: false,
                args: false
            };

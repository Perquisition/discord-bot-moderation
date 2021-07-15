const Discord = require('discord.js');
module.exports.run = (client, message, args) => {

    message.channel.send('Loading data').then(async (msg) => {
        msg.delete()

        message.channel.send(new Discord.MessageEmbed()
            .setColor('9da1ff')
            .addFields(
                { name: '🏓 Latency is', value: (msg.createdTimestamp - message.createdTimestamp) + " ms. ", inline: false },
                { name: '📡 API Latency is', value: (Math.round(client.ws.ping)) + " ms. ", inline: false },
                )
            )
        }
    )
};
module.exports.help = {
                name: "ping",
                aliases: ['ping'],
                category: 'misc',
                description: "Give my ping!",
                cooldown: 10,
                usage: '',
                isUserAdmin: false,
                args: false
            };

const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (message.deletable) {
        message.delete();
    }

    
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Tu n'as pas la permission requise pour faire ça....").then(m => m.delete(1000));
    }

    
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("Il n'a pas de message, Je ne peux pas supprimer le vide !").then(m => m.delete(1000));
    }

    
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Désolé, je ne peux pas supprimer ça.").then(m => m.delete(1000));
    }



    let deleteAmount;

    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
        .then(deleted => message.channel.send(`J'ai supprimé ${deleted.size} messages.`))
        .catch(err => message.reply(`Something went wrong... ${err}`));
},



module.exports.help = {
    name: "clear",
    aliases: ['clear, purge'],
    category: 'moderation',
    description: "Effacer un nombre de message specifié ",
    cooldown: 5,
    usage: '<nombre_message>',
    permissions: true,
    isUserAdmin: false,
    args: true,
};

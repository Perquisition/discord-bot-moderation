module.exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    const reason = args.splice(1).join(' ');
    user ? message.guild.member(user).ban(reason) : message.channel.send("L'utilisateur n'existe pas");
};

module.exports.help = {
    name: "ban",
    aliases: ['ban'],
    category: 'moderation',
    description: "Bannir un utilisateur",
    cooldown: 10,
    isUserAdmin: true,
    usage: '<prefix_@delapersonne_raison>',
    isUserAdmin: true,
    args: true,
};

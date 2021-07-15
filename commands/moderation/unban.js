module.exports.run = async (client, message, args) => {
    let user = await client.users.fetch(args[0]);
    if (!user) return message.reply("L'utilisateur n'existe pas.");
    message.guild.members.unban(user);
};


module.exports.help = {
    name: "unban",
    aliases: ['unban'],
    category: 'moderation',
    description: "Unban un utilisateur",
    cooldown: 10,
    usage: '<votre_message>',
    isUserAdmin: false,
    permissions: true,
    args: true
};

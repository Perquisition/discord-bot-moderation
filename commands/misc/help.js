const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config");
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');
console.log(categoryList);

module.exports.run = (client, message, args) => {
    console.log()
    
    if (!args.length) {
        const embed = new MessageEmbed()
            .setColor("750372")
            .addField("🔨 Liste des commandes", `🧾 Une liste de toutes les sous catégories disponibles et leurs commandes\n📌 Pour plus d'infos sur une commande précise, tapez \`${PREFIX}help <NomCommande>\``)

            for (const category of categoryList) {
                embed.addField(
                    `${category} :`,
                    `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}` 
                )
            }
        return message.channel.send(embed);
    } else {
        const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));

        const embed = new MessageEmbed()
            .setColor("750372")
            .setTitle(`\`${command.help.name}\``)
            .addField("Description", `${command.help.description} (cd: ${command.help.cooldown} secs)`)
            .addField("Utilisation", command.help.usage ? `${PREFIX}${command.help.name} ${command.help.usage}` : `${PREFIX}${command.help.name}`, true)

            if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true)
            return message.channel.send(embed);
        
    };
};

module.exports.help = {
    name: "help",
    aliases: ['help'],
    category: 'misc',
    description: "Donne les commandes du bot.",
    cooldown: 10,
    usage: '<command_name>',
    permissions: false,
    isUserAdmin: false
};

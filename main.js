const { Client, Collection, Message } = require('discord.js');
const { TOKEN, PREFIX } = require('./config.js');
const { readdirSync } = require("fs");
const { loadCommands, loadEvents } = require("./util/loader")

const client = new Client();

["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);

client.login(TOKEN);
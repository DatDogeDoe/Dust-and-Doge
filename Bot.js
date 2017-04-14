const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const adminfile = config.adminfile;
const BotTokenLol = config.token;
const prefix = config.prefix;


client.on('ready', () => {
  console.log('Bot Status: Online');
  console.log('Starting All Commands');
  console.log('Saving Latest Changes');
  client.user.setGame( +client.guilds.size+ ' Servers | ' +client.users.size+ ' Users');
  client.user.setStatus('online');
});

client.login(BotTokenLol);

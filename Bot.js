const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const adminfile = config.adminfile;
//removed the constant for the token, if it's only used once, there's no need to use a constant/variable
const prefix = config.prefix;


client.on('ready', () => {
  console.log('Bot Status: Online\nStarting All Commands\nSaving Latest Changes');//logging multiple lines on one line :O
  client.user.setGame( +client.guilds.size+ ' Servers | ' +client.users.size+ ' Users');
  client.user.setStatus('online');
});

client.on('message', message =>{
  if(message.author === client.user) return;
});

client.login(config.token);

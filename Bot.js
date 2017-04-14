const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log('Bot Status: Online');
  console.log('Starting All Commands');
  console.log('Saving Latest Changes');
  client.user.setGame( +client.guilds.size+ ' Servers | ' +client.users.size+ ' Users');
  client.user.setStatus('online');
});

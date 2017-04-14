const Discord = require('discord.js');
const client = new Discord.Client();
const Cleverbot = require("cleverbot.io");
const CleverBotClient = new Cleverbot('S9rvxDoBzlA1khRT','e5Tt0nRm9gohdu2tiSDDLHbdDIrvvHDa');
const config = require('./config.json');
const adminfile = config.adminfile;
const prefix = config.prefix;


client.on('ready', () => {
  console.log('Bot Status: Online\nStarting All Commands\nSaving Latest Changes');//logging multiple lines on one line :O
  client.user.setGame( +client.guilds.size+ ' Servers | ' +client.users.size+ ' Users');
  client.user.setStatus('online');
});

client.on("message", message => {
if(message.author === client.user) return;
var args = message.content.split(" ").slice(1).join(" ");

if(message.content.startsWith(client.user)){
 //add all your clever bot command stuff in here, but please don't copy/paste, it makes everything so messy and it's hard to work with 
}
});

client.login(config.token);

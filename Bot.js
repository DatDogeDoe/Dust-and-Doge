const Discord = require('discord.js');
const client = new Discord.Client();
const Cleverbot = require("cleverbot.io");
const CleverBotClient = new Cleverbot('S9rvxDoBzlA1khRT','e5Tt0nRm9gohdu2tiSDDLHbdDIrvvHDa');
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
client.on("message", function(message) {
  var BotMention = "@<302444220344696833>" //The Mention for the Bot
  var args = message.content.split(" ").slice(1).join(" ") //Args are used to see what the User said to the bot
if(message.content.includes(BotMention)) { 
CleverBotClient.setNick("Joringa");
CleverBotClient.create(function (err, session){
    console.log("CreatED/ing CleverBotClient! function> | session: "+ session);
})

{0
          message.channel.startTyping();
    CleverBotClient.ask(args, function (err, response) {
        message.reply(response);
              message.channel.stopTyping();
      });
    }}});

client.login(config.token);

// Imports
const Discord = require('discord.js');
const conf = require('./config.js');
const bot = new Discord.Client();
const talkedRecently = new Set();

// Vars
const token = conf.discordAPI;
var prefix = conf.prefix;

// Main
bot.on('message', message => {
  if (message.author.bot) return;
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  let cmd = messageArray[0];
  let number = Math.floor(Math.random() * 76);
  let member = message.mentions.members.first();


  // Checking to see if the user is an Admin.
  if (cmd === `${prefix}test` && message.member.roles.cache.some(r => r.name === "Administrator")){
    message.channel.send("User is an admin");
  }

  if (cmd == `${prefix}pit` && message.member.roles.cache.some(r => r.name === "Administrator")){

    // give the member the role
    var role= member.guild.roles.cache.find(role => role.name === "The Pit");
    member.roles.add(role);
  }

  if (cmd == `${prefix}leavepit` && message.member.roles.cache.some(r => r.name === "Administrator")){

    // give the member the role
    var role= member.guild.roles.cache.find(role => role.name === "The Pit");
    member.roles.remove(role);
  }

});
bot.login(token);
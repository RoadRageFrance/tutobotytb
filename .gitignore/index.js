const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("b!");

bot.on('ready', () =>  {
    console.log("Je suis connecté !")
  });

bot.login(process.env.TOKEN)

bot.on('message', message => {
    if(message.content.startsWith(prefix + "cc")) {
        message.channel.send("**Salut !**")
    }
    
    if(message.content.startsWith(prefix + "hey")) {
        message.reply("**Yo le S**")
    }
})

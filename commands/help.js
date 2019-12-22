const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

try{

var text = "**Tim Community Bot*** \n\n **__Commands__** \n\n ?ban - ban a user \n ?Hey - Get a message back "

message.author.send(text);

message.channel.send("📋 Alle commands kan je vinden in je direct message 📋");

}catch(err){
message.channel.send("🔴 Er is een fout opgetreden. 🔴")
}

}

module.exports.help = {
    name: "help"
}
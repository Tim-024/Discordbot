const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    var idee = args.join(" ");
 
    if (!idee) return message.channel.send("👀 Je moet wel een idee meegeven 👀");
 
    var ideeEmbed = new discord.RichEmbed()
        .setTitle("Nieuw Idee")
        .setColor("#00FF00")
        .addField("Idee: ", idee)
        .addField("By: ", message.author);
 
    var ideeChannel = message.guild.channels.find(`name`, "idee");
    if (!ideeChannel) return message.guild.send("🔴 ERROR: Can't find channel **idee** 🔴");
 
    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });
 
    // ?idee (je idee)
 
}
 
module.exports.help = {
    name: "idee",
    description: "Heb je een idee. Zet het dan hier en misschien passen we het toe."
}
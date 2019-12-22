const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Id van category van tickets.
    const categoryId = "657587040619331615";
 
    // Als je in een kanaal niet je ticket is ?close doet message
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("🍂 Je kan dit alleen in een ticket kanaal doen 🍂");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hoi, " + message.channel.name)
        .setDescription("Je ticket is gemarkeerd als **compleet**. Wil je een nieuwe maken doe dan ?ticket")
        .setFooter("ticket gesloten");
 
    var logChannel = message.guild.channels.find("name", "logs");
    if (!logChannel) return message.channel.send("🔴 ERROR: Can't find channel **logs** 🔴");
 
    logChannel.send(embedCloseTicket);
 
}
 
module.exports.help = {
    name: "close",
    description: "Sluit een ticket af"
}
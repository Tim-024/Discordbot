const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setTitle("About me")
        .addField("About me", "Ik ben Tim, 15 jaar oud", true)
        .addField("Website", "https://timdev.nl/",true)
        .addField("Wat doe ik?", "Ik ben een developer die voor jou, discord bots, discord servers, minecraft servers maakt en nog veel meer andere services heeft.")
        .setColor(0xFF0000)
        .setURL("https://timdev.nl/");

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "about"
}

const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL

    var serverEmbed = new discord.RichEmbed()
        .setDescription("Discord Server Informatie.")
        .setColor("#bf2222")
        .setThumbnail(icon)
        .addField("Server naam", bot.user.username)
        .addField("Je bent gejoined op", message.member.joinedAt)
        .addField("Aantal leden", message.guild.memberCount);

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}
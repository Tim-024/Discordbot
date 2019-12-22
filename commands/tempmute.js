const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MEMBER")) return message.channel.send("❌ Geen permissies ❌");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("🔴 ERROR: Can't find user 🔴");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ Geen permissies ❌")

    var muteRole = message.guild.roles.find("name", "Muted");

    if(!muteRole) return message.channel.send("🔴 ERROR: Can't find role **Muted** 🔴");

    var muteTime = args[1];

    if(!muteTime) return message.channel.send("🕒 Geef een tijd mee 🕒");

    await (user.addRole(muteRole.id));

    message.channel.send(`👋 ${user} is muted voor ${muteTime} 👋`);

    setTimeout(function() {

        user.removeRole(muteRole.id);

        message.channel.send(`⚠️ ${user} is unmuted ⚠️`);


    }, ms(muteTime));

}

module.exports.help = {
    name: "tempmute"
}
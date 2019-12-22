const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    // ?tempban (gebruiker) (reden) (tijd)

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("❌ Geen permissies ❌");

    var user = message.guild.member(message.mentions.users.first());

    if (!user) return message.channel.send("📌 ?tempban (gebruiker) (tijd) (reden)");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ Geen permissies ❌");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("📜 Geef een reden op 📜");

    var tempBanTime = args[1];

    if (ms(tempBanTime)) {

        await message.guild.member(user).ban(reason);

        message.channel.send(`👋 ${user} is gebanned voor ${tempBanTime} 👋`);

        setTimeout(function () {
            
            message.guild.unban(user.id);

            message.channel.send(`⚠️ ${user} is unbanned ⚠️`);

        }, ms(tempBanTime));

    } else {
        return message.channel.send("🕒 Geef een tijd mee 🕒");
    }

}

module.exports.help = {
    name: "tempban"
}
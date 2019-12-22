const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ Geen permissies ❌")

    if (!args[0]) return message.channel.send("🍒 Oops, je kan 1-200 berichten verwijderen 🍒")

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] == 0) {

                message.channel.send(`🌼 Oops, Ik kan geen 0 berichten verwijderen 🌼`).then(message => message.delete(3000));
            } else if (args[0] == 1) {

                message.channel.send(`👍 Ik heb 1 bericht verwijderd 👍`).then(message => message.delete(3000));

            } else {

                message.channel.send(`👍 Succesvol ${args[0]} berichten verwijderd 👍`).then(message => message.delete(3000));


            }

            message.channel.send(`👍 Succesvol ${args[0]} berichten verwijderd 👍`).then(message => message.delete(3000));

        });

    } else {
        return message.channel.send("❌Geef een getal op ❌")
    }

}

module.exports.help = {
    name: "clear"
}
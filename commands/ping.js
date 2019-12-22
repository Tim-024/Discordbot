const discord = require("discord.js");
module.exports.run = async(bot, message, args) => {

message.channel.send("Jouw ping is " + (message.createdTimestamp - Date.now()) + "ms")

}

module.exports.help = {
    name: "ping"
}
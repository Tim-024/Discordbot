const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // ID van de categorie van de tickets.
    const categoryId = "657587040619331615";
 
    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;
 
    var bool = false;
 
    message.guild.channels.forEach((channel) => {
 
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
 
            message.channel.send("🐍 Oops, Je hebt al een ticket aangemaakt 🐍");
 
            bool = true;
 
        }
 
    });
 
    if (bool == true) return;
 
    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hoi, " + message.author.username)
        .setFooter("📞 Support kanaal wordt aangemaakt 📞");
 
    message.channel.send(embedCreateTicket);
 
    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { 
 
        createdChan.setParent(categoryId).then((settedParent) => { 
 
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new discord.RichEmbed()
                .setTitle("Hoi, " + message.author.username.toString())
                .setDescription("📞 Je kan hier je vraag stellen 📞");
 
            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("🔴 Er is iets fout gelopen 🔴");
        });
 
    }).catch(err => {
        message.channel.send("🔴 Er is iets fout gelopen 🔴");
    });
 
}
 
module.exports.help = {
    name: "ticket",
    description: "Maak een ticket aan"
}
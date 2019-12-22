const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    const aantalSterren = args[0];
 
    // ?review (aantal sterren 1-5) (je review text)
    if (!aantalSterren || aantalSterren < 1 || aantalSterren > 5) return message.channel.send("Geef een aantal sterren op! Kies tussen 1 en 5.");
 
    const bericht = args.splice(1, args.length).join(' ') || '**Geen bericht meegegeven**';
 
    var reviewChannel = message.guild.channels.find('name', 'review');
    if (!reviewChannel) return message.channel.send("Kanaal niet gevonden");
 
    var sterren = "";
    for (var i = 0; i < aantalSterren; i++) {
 
        sterren += ":star: ";
 
    }
 
    message.delete();
 
    const review = new discord.RichEmbed()
        .setTitle(`${message.author.username} heeft een review geschreven! :tada:`)
        .setColor("#00ff00")
        .addField("Sterren:", `${sterren}`)
        .addField("Review:", `${bericht}`);
 
    message.channel.send(":white_check_mark: Je hebt succesvol een review geschreven!");
    return reviewChannel.send(review);
 
}
 
module.exports.help = {
    name: "review",
    description: "review command."
}
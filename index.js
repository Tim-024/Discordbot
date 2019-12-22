const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen!`)

        bot.commands.set(fileGet.help.name, fileGet);



    })

});

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

    bot.user.setActivity("In development!", { type: "PLAYING" });

});

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "Member");

    if (!role) return message.guild.channels.send("Deze rol bestaat niet!");

member.addRole(role);

const channel = member.guild.channels.find("name", "algemeen");

if(!channel) return;

channel.send(`Welkom ${member} in de community `)

})

bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments);

    if (command === `${prefix}kick`) {

        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

        if (!kickUser) return message.channel.send("Ik kan deze gebruiker niet vinden!")

        var reason = arguments.join(" ").slice(22);

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je hebt niet genoeg perms!");

        if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je kan deze gebruiker niet kicken");

        var kick = new discord.RichEmbed()
            .setDescription("Kick")
            .setColor("#ee0000")
            .addField("Kicked persoon", kickUser)
            .addField("Gekicked door", message.author)
            .addField("Reden", reason);

        var kickChannel = message.guild.channel.find(`name`, "logs");
        if (!kickChannel) return message.guild.send("Sorry, ik kan het log kanaal niet vinden.");

        message.guild.member(kickUser).kick(reason);

        kickChannel.send(kick);

        return;
    }

});




bot.login(botConfig.token);
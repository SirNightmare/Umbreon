const Discord = require("discord.js");
const commando = require("discord.js-commando");
let prefix = "U/";
const bot = new commando.CommandoClient({
    commandPrefix: "U/",
    owner: "360908660727087107, 428371223043506182"
});

bot.registry.registerGroup(`fun`, `Fun`);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("ready", async () => {
    console.log("Bot Ready!");
    console.log("Settings:")
    console.log(`Name: ${bot.user.username}#${bot.user.discriminator}`);
    console.log("Prefix: " + prefix);
    console.log(bot.commands);
    bot.user.setPresence({ game: { name: `My Siblings | U/help for help`, url: 'https://twitch.tv/monstercat', type: 1 } });
});
bot.login("NDY1NTc3MzcyNDA2NTEzNjc4.DiP5Qg.BXNdnhgMSavdW08l0TCKRLvZ9O8");

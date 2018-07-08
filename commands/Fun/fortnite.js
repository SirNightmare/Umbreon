const commando = require("discord.js-commando");
const Client = require("fortnite")
const ft = new Client('fc05ef07-131b-4466-9bd6-62129fce262b')
class fortnite extends commando.Command {
    constructor(client) {
        super(client, {
            name: "fortnite",
            group: "Fun",
            memberName: "fun",
            description: "Gets the stats of a Fortnite account."
        });
    }

    async run(message, args) {
        if(message.author.bot) return;
        let username = args[0];
        let platform = args[1] || "pc";
    
        if(!username) return message.reply("Sorry! you must provide a username.");
        let data = ft.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;
        let score = lifetime[6]['Score'];//done
        let mplayed = lifetime[7]['Matches Played'];//done
        let wins = lifetime[8]['Wins']; //done
        let winper = lifetime[9]['Win%'];//done
        let kills = lifetime[10]['Kills']; //done
        let kd = lifetime[11]['K/d'];//done
        
    
        let embed = new Discord.RichEmbed()
        .setTitle(`Fortnite stats for ${data.username}`)
        .setColor("RANDOM")
        .addField("Wins", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Matches Played", mplayed, true)
        .addField("Wins Percentage", winper, true)
        .addField("K/D", kd, true)
        .setThumbnail("https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png/revision/latest?cb=20170806011008")
        message.channel.send(embed)
        });
    }
}
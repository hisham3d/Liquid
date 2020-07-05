function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
exports.run = (client, message, args) => {
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": "Brazil",
        "eu-central": "Central Europe",
        "singapore": "Singapore",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong",
        "india": "India"
    };
    
    var emojis;
    if (message.guild.emojis.size === 0) {
        emojis = 'None';
    } else {
        emojis = message.guild.emojis.size;
    }

    message.channel.send(`= SERVER INFO =
    • Created :: ${message.guild.createdAt.toString().substr(0, 15)}, (${checkDays(message.guild.createdAt)})
    • ID :: ${message.guild.id}
    • Owner :: ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}
    • Region :: ${region[message.guild.region]}
    • User Count :: ${message.guild.memberCount}
    • Bot Count :: ${message.guild.members.filter(m => m.user.bot).size}
    • AFK Timeout :: ${message.guild.afkTimeout / 60} minutes
    • Roles :: ${message.guild.roles.size}
    • Channels :: ${message.guild.channels.size}
    • Emojis :: ${emojis}/100
    • Verification level :: ${verifLevels[message.guild.verificationLevel]}`, {code: "asciidoc"})

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["serverstats"],
  permLevel: "User"
};

exports.help = {
  name: 'serverinfo',
  category: 'Miscelaneous',
  description: 'Displays information about the server.',
  usage: 'serverinfo'
};
const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

exports.run = (client, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let user = message.mentions.users.first();
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Error, you do not have the **Kick Members** permission!");
    if(message.mentions.users.size < 1) return message.reply('You must mention someone to clear their warns.').catch(console.error);
    if(!user) return message.reply("Couldn't find that user.");
    if(!warns[`${user.id}, ${message.guild.id}`]){
    warns[`${user.id}, ${message.guild.id}`] = {
        warns: 0
    };
}
    let reason = `${warns[`${user.id}, ${message.guild.id}`].warns} warnings have been cleared for this person`;
    if(warns[`${user.id}, ${message.guild.id}`].warns > 0) {
        warns[`${user.id}, ${message.guild.id}`] = {
        warns: 0
    };
    }else{
        reason = 'This user doesn\'t have any active warnings.'
    };

    fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
        if(err) throw err;
      });

    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .addField('Action:', 'Clear Warns', true)
    .addField('User:', `${user.username}#${user.discriminator}`, true)
    .addField('Result:', reason, true)
    .setFooter(`© Liquid`);
    message.channel.send({embed});
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ["removewarns"],
        permLevel: 'Moderator'
      };

    exports.help = {
      name: 'clearwarns',
      category: 'Moderation',
      description: 'Clear a user\'s warnings.',
      usage: 'clearwarns <@user>'
    };

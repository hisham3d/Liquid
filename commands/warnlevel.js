const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

exports.run = (client, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply('You must mention someone to check their warns.').catch(console.error);
    if(!user) return message.reply("Couldn't find that user.");
    if(!warns[user.id]) warns[user.id] = {
      warns: 0
    };

    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .addField('Action:', 'Warn Check')
    .addField('User:', `${user.username}#${user.discriminator}`)
    .addField('Number of warnings:', warns[`${user.id}, ${message.guild.id}`].warns)
    .setFooter(`© Liquid`);
    message.channel.send({embed});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["warns"],
    permLevel: 'Moderator'
  };

  exports.help = {
    name: 'warnlevel',
    category: 'Moderation',
    description: 'Show how many active warnings a user has.',
    usage: 'warnlevel <@user>'
  };
  //message.guild.member() || message.guild.members.get(args[0])

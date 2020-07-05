const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.first().displayAvatarURL : message.author.displayAvatarURL;
    if (message.mentions.users.size > 0) {
      const embed = new Discord.RichEmbed()
        .setColor(3447003)
        .setTitle(`Avatar for \`${message.mentions.users.first().tag}\`:`)
        .setImage(`${avatar}`)
        .setFooter(`© Liquid`);
        message.channel.send({embed});
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setTitle(`Avatar for \`${message.author.tag}\`:`)
      .setImage(`${avatar}`)
      .setFooter(`© Liquid`);
      message.channel.send({embed});
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "avatar",
    category: "Miscelaneous",
    description: "Sends the avatar of the mentioned user.",
    usage: "avatar <@user>"
  };

exports.run = (client, message, [mention, ...reason]) => {

    if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to ban.");

  if (!message.guild.me.hasPermission("BAN_MEMBERS", "KICK_MEMBERS"))
    return message.reply("I don't have the permissions to ban this user.");

  const banMember = message.mentions.members.first();

  banMember.ban(reason.join(" ")).then(member => {
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .addField('Action:', 'Ban')
    .addField('User:', `${user.username}#${user.discriminator}`)
    .addField('Banned by:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', `${reason}`)
    .setFooter(`© Liquid`);
  });


  let logchannel = message.guild.channels.find('name', 'logs');
  if  (!logchannel){
    message.channel.send({embed})
  }else{
    client.channels.get(logchannel.id).send({embed});
    message.channel.send({embed})
  }
  if(user.bot) return;
  message.mentions.users.first().send({embed}).catch(e =>{
    if(e) return console.error(e);
  });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Administrator"
  };

  exports.help = {
    name: "ban",
    category: "Moderation",
    description: "Bans the provided user from the guild the command is executed in.",
    usage: "ban <@user>"
  };

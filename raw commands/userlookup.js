exports.run = async (client, message, args) => {
  if (!args.id) {
    return client.emit('commandUsage', message, this.help);
  }

  let user = await client.fetchUser(args.id);

  await message.channel.send({
    embed: {
      color: 3447003,
      title: `${user.bot ? 'Bot' : 'User'} Lookup`,
      fields: [
        {
          name: 'Username',
          value: user.username,
          inline: true
        },
        {
          name: 'Discriminator',
          value: user.discriminator,
          inline: true
        },
        {
          name: 'ID',
          value: user.id,
          inline: true
        }
      ],
      thumbnail: {
        url: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith('a_') ? 'gif' : 'png'}`
      }
    }
  });
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["listuser"],
    permLevel: "Moderator"
  };
  
  exports.help = {
    name: "userlookup",
    category: "Moderation",
    description: "Lookup a user in the guild the command is executed in.",
    usage: "userlookup <name>"
  };
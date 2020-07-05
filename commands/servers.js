exports.run = (client, message, args, level) => {
    message.channel.send(`${client.user.username} is currently on the following servers:`)
    message.channel.send(`= SERVERS =
    • ${client.guilds.map(g => `${g.name} :: ${g.memberCount} Members`).join(`\n`)}`, {code: "asciidoc"}, {split: true});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["guilds", "listguilds", "listservers"],
    permLevel: "Bot Admin"
  };
  
  exports.help = {
    name: "servers",
    category: "System",
    description: "Sends the list of the servers the bot is currently in.",
    usage: "servers"
  };
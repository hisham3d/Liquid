exports.run = (client, message, args, level) => {
    message.channel.send(`\`${message.author.id}\``);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["whatsmyid", "getmyid"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "myid",
    category: "Miscelaneous",
    description: "Sends the user's ID.",
    usage: "myid"
  };
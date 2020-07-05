exports.run = async (client, message, args, level) => {
    let text = args.join(" ");
  message.delete();
  message.channel.send(text);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["repeat"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "say",
    category: "Miscelaneous",
    description: "Repeats the user's input text.",
    usage: "say <text> <text> ..."
  };
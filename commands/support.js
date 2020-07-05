exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    message.reply(`The invite to the support server: <https://discord.gg/75ZTMY2>`)
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["supportserver"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "support",
    category: "Miscelaneous",
    description: "Sends the invite link to the support server.",
    usage: "support"
  };
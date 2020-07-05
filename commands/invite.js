exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    message.reply(`To invite me to your server use this link: <https://bit.ly/liquidbot>`)
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["getbot", "invitebot", "inviteliquid", "getliquid"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "invite",
    category: "Miscelaneous",
    description: "Sends the invite link of the bot.",
    usage: "invite"
  };
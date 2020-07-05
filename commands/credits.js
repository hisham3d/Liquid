exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const LeadDev = (`malok#8571`);
    const graphD = (`Not Levi#6970`);
    message.channel.send(`= Credits = 
    • Lead Developer :: ${LeadDev}
    • Graphic Designer :: ${graphD}`, {code: "asciidoc"});
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["developers", "devs", "owner"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "credits",
    category: "Miscelaneous",
    description: "Lists the bot credits.",
    usage: "credits"
  };
exports.run = async (client, message, level) => {
    let Discord = require('discord.js')
    let args = message.content.split(" ").slice(1);

    if (!args || args.length < 1) return message.reply('Please input some text to announce.')

    await  message.delete();
    
    let embed = new Discord.RichEmbed()
    .setTitle("Annoucement")
    .setColor(3447003)
    .addField("Message:", args.join(" "))
    .setFooter(`© Liquid`);

    await message.channel.send({embed});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["announcement"],
    permLevel: "Administrator"
  };
  
  exports.help = {
    name: "announce",
    category: "Moderation",
    description: "Sends the text in an embed message.",
    usage: "announce <text>"
  };
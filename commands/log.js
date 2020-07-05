exports.run = (client, message, args, level) => {
    let text = args.join(" ");

   if(!args || args.length < 1)
   return message.reply(`Please input something to log.`)
    
    console.log(`${message.author} : ${text}`);
    message.reply(`Successfully logged your message to the console.`)
}

 exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["consolelog", "logconsole"],
    permLevel: "Bot Support"
  };
  
  exports.help = {
    name: "log",
    category: "System",
    description: "Log something on the console using the bot.",
    usage: "log <text>"
  };
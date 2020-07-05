exports.run = function(client, message, args) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Error, you donot have the **Manage Messages** permission!");
    if(!args[0]) return message.reply('Please specify an amount of messages to delete.')
    if(parseInt(args[1]) == NaN) return message.channel.send("You need to specify a valid amount.");
    if(args[0] === 'all') {
      let messagecount = parseInt(args[1]);
      message.channel.fetchMessages({
        limit: 100
      }).then(messages => message.channel.bulkDelete(messagecount))
      .catch(e => {
        if(e) return message.channel.send("Error: ", e)
      })
    }
    else if(args[0] === 'bots') {
      message.channel.fetchMessages({
        limit: args[1]
      }).then(messages => {
        const userMessages = messages.filter(message => message.author.bot) 
        message.channel.bulkDelete(userMessages)
      }).catch(e => {
        if(e) return message.channel.send("Error: ", e)
      })
    }
    else if(args[0] === 'user') {
      message.channel.fetchMessages({
        limit: args[1]
      }).then(messages => {
        const userMessages = messages.filter(message => !message.author.bot) 
        message.channel.bulkDelete(userMessages)
      }).catch(e => {
        if(e) return message.channel.send("Error: ", e)
      })
    };
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Administrator"
  };
  
  exports.help = {
    name: "purge",
    category: "Moderation",
    description: "Deletes X amount of messages.",
    usage: "purge all/bots/user <amount>"
  };
  

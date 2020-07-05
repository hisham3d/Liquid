exports.run = async (client, message, args, level) => {
    let text = args.join(" ");

    if (!args || args.length < 1)
    return message.reply("Please input some text to set as the username.");

    await client.user.setUsername(`${text}`)
  .then(user => console.log(`My new username is ${user.username}`))
  .then(message.channel.send(`Successfully set username to: \`${text}\``))
  .catch(e => {
    message.reply(
      'Something went wrong while changing my username. I\'ve logged the error in the console.'
    );
    return console.error(e);
  });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["setbotname"],
    permLevel: "Bot Admin"
  };
  
  exports.help = {
    name: "setusername",
    category: "System",
    description: "Change the username of the bot.",
    usage: "setusername <name>"
  };
  
exports.run = async (client, message, args, level) => {
    let text = args.join(" ");

    if (!args || args.length < 1)
    return message.reply("Please input some text to set as the current activity.");

    await client.user.setActivity(`${text}`, { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${text}`))
  .then(user => message.channel.send(`Activity successfully set to \`${text}\`.`))
  .catch(e => {
    message.reply(
      'Something went wrong while changing my activity. I\'ve logged the error in the console.'
    );
    return console.error(e);
  });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["setActivity", "changeactivity", "changeActivity"],
    permLevel: "Bot Admin"
  };
  
  exports.help = {
    name: "setactivity",
    category: "System",
    description: "Changes the activity of the bot. If you provide it with nothing, it will set it to none.",
    usage: "setactivity <text> OR setactivity"
  };
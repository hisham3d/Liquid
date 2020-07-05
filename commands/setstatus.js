exports.run = async (client, message, args, level) => {
  let text = args.join("");

  if (!message.content.includes("online") && !message.content.includes("idle") && !message.content.includes("invisible") && !message.content.includes("idle"))
  return message.reply(`Please input one of the following: \`online\`, \`idle\`, \`dnd\` or \`invisible\` and try again.`);

    await client.user.setStatus(`${text}`)
  .then(message.channel.send(`Status successfully set to \`${text}\``)) 
  .then(console.log(`Status set to ${text}`))
  .catch(e => {
    message.reply(
      'Something went wrong while changing my status. I\'ve logged the error in the console.'
    );
    return console.error(e);
  });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["setStatus", "set-status", "setafk", "setAFK"],
    permLevel: "Bot Admin"
  };
  
  exports.help = {
    name: "setstatus",
    category: "System",
    description: "Changes the status of the bot.",
    usage: "setstatus <online/idle/dnd/invisible>"
  };
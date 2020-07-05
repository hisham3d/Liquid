exports.run = async (client, message, args) => {

  //if (!/^(https?:\/\/)((([-a-z0-9]{1,})?(-?)+[-a-z0-9]{1,})(\.))+([a-z]{1,63})\/((([a-z0-9._\-~#%])+\/)+)?([a-z0-9._\-~#%]+)\.(jpg|jpeg|gif|png|bmp)$/i.test(args.join(' '))) {
  //return
  //};

  if (!args || args.length < 1) 
  return message.reply(`Please provide me with a valid link to set my avatar.`);

  await client.user.setAvatar(args.join(" "))

      .then(presence => console.log(`New avatar set!`))
      .then(user => message.channel.send(`New avatar successfully set!`))
      .catch(e => {
          message.reply(
            'Something went wrong while changing my avatar. I\'ve logged the error in the console. *You probably didn\'t provide me with a valid link.'
          );
          return console.error(e);
        });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["setAvatar", "changeavatar", "set-avatar"],
    permLevel: "Bot Admin"
  };
  
  exports.help = {
    name: "setavatar",
    category: "System",
    description: "Changes the avatar of the bot.",
    usage: "setavatar <link>"
  };
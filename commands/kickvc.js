exports.run = (client, message, args, level) => {
// Make sure the bot user has permissions to move members in the guild:
if (!message.guild.me.hasPermission(['MANAGE_CHANNELS', 'MOVE_MEMBERS'])) return message.reply('Missing the required `Move Members` permission.');

// Get the mentioned user/bot and check if they're in a voice channel:
const member = message.mentions.members.first();
if (!member) return message.reply('You need to @mention a user/bot to kick from the voice channel.');
if (!member.voiceChannel) return message.reply('That user/bot isn\'t in a voice channel.');

member.setVoiceChannel(null);

message.react('👌');
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["disconnectvc", "kickvoice"],
    permLevel: "Administrator"
  };
  
  exports.help = {
    name: "kickvc",
    category: "Moderation",
    description: "Kick a specific user from a voice channel.",
    usage: "kickvc <@user/bot>"
  };
  

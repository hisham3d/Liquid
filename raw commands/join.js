exports.run = async (client, msg, args, level) => {
    return new Promise((resolve, reject) => {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
        voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
    });
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["joinvc"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "join",
    category: "Music",
    description: "Joins the voice channel the user is currently in.",
    usage: "join"
  };
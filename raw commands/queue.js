exports.run = async (client, msg, args, level) => {
    let queue = {};
if (queue[msg.guild.id] === undefined) return msg.reply(`Add some songs to the queue first with \`${client.config.prefix}add\``);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
		msg.channel.sendMessage(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["songlist"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "queue",
    category: "Music",
    description: "Lists the song queue for the guild the command has been run in.",
    usage: "queue"
  };
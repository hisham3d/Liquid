exports.run = async (client, msg, args, level) => {
    const yt = require("ytdl-core");
        let queue = {};
		let url = msg.content.split(' ')[1];
		if (url == '' || url === undefined) return msg.channel.sendMessage(`You must add a YouTube video url, or ID after ${client.config.prefix}add`);
		yt.getInfo(url, (err, info) => {
			if(err) return msg.reply('Invalid YouTube Link: ' + err);
			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
			msg.channel.sendMessage(`added **${info.title}** to the queue`);
		});
    };
    
    exports.conf = {
        enabled: false,
        guildOnly: false,
        aliases: ["song"],
        permLevel: "User"
      };
      
      exports.help = {
        name: "add",
        category: "Music",
        description: "Plays a song in a voice channel.",
        usage: "add <song>"
      };
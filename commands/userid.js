exports.run = (client, msg, args, level) => {

    if(msg.mentions.members.size < 1)
    return msg.reply(`You must mention a user to fetch his/her ID.`)

    if(msg.mentions.members.size > 0){
			if(msg.mentions.members.size > 1){
				var response = "Multiple users found:";
				for(id of msg.mentions.members.keys()){
					response += "\nThe ID of <@" + id + "> is " + id;
				}
				msg.channel.send(response);
			} else {
				let id = msg.mentions.members.firstKey();
				msg.channel.send("\nThe ID of <@" + id + "> is " + id);
			}
		} else if(suffix){
			var users = msg.channel.guild.members.filter((member) => member.user.username == suffix).array();
			if(users.length == 1){
				msg.channel.send( "The ID of " + users[0].user.username + " is " + users[0].user.id)
			} else if(users.length > 1){
				var response = "Multiple users found:";
				for(var i=0;i<users.length;i++){
					var user = users[i];
					response += "\nThe ID of <@" + user.id + "> is " + user.id;
				}
				msg.channel.send(response);
			} else {
				msg.channel.send("No user " + suffix + " found!");
			}
		} else {
			msg.channel.send( "The ID of " + msg.author + " is " + msg.author.id);
		}
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["getuserid"],
    permLevel: "Moderator"
  };
  
  exports.help = {
    name: "userid",
    category: "Moderation",
    description: "Sends a specific user's ID.",
    usage: "userid <@user>"
  };
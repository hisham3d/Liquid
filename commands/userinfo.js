let moment = require('moment');
let Discord = require('discord.js');

function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
};
exports.run = async (client, msg, args) => {
  let user = msg.mentions.users.first();
  let muser = msg.guild.member(msg.mentions.users.first());
    if (!muser) muser = msg.member;
    if(!user) user = msg.author;

    msg.channel.send(`= USER INFO =
    • Currently :: ${muser.presence.status.toUpperCase()}
    • Activity :: ${muser.presence.game === null ? "No Currently Active Game" : muser.presence.game.name}
    • Joined Discord :: ${moment(user.createdAt).toString().substr(0, 15)}, (${moment(user.createdAt).fromNow()})
    • Joined Server :: ${moment(muser.joinedAt).toString().substr(0, 15)}, (${moment(muser.joinedAt).fromNow()})
    • Roles :: ${muser.roles.array()}
    • Is Bot :: ${user.bot.toString().toUpperCase()}`, {code: "asciidoc"})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["userstats"],
  permLevel: "Moderator"
};

exports.help = {
  name: 'userinfo',
  category: 'Moderation',
  description: 'Displays information about a user.',
  usage: 'userinfo <@user>'
};
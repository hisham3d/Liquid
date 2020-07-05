exports.run = (client, message, args, level) => {
  const Discord = require('discord.js')
  const api = 'https://api.trackcovid.xyz/all'
  const snek = require('snekfetch')
        snek.get(api).then(r => { 
            let body = r.body

            // let entry = body.find(post => post.cases === 'cases')
            // if(!entry) message.channel.send("Error")

            const data = r.body
            const e = new Discord.RichEmbed()
            .setAuthor('COVID-19 Global Stats')
            .addField('**Cases:**', data.cases, true)
            .addField('**Deaths:**', data.deaths, true)
            .addField('**Recovered:**', data.recovered, true)
            .addField('**Active:**', data.active, true)
            .addField('**Affected Countries:**', data.affectedCountries, true)
            message.channel.send(e)
        })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["covid19", "corona"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "covid",
    category: "COVID-19",
    description: "Sends COVID-19 global stats.",
    usage: "covid"
  };
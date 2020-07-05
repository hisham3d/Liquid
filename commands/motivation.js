exports.run = (client, message, args, level) => {
    const fs = require('fs');
    const jsonQuotes = fs.readFileSync(
      'assets/quotes/motivational.json',
      'utf8'
    );
    const quoteArray = JSON.parse(jsonQuotes).quotes;

    const randomQuote =
      quoteArray[Math.floor(Math.random() * quoteArray.length)];
      
    return message.channel.send(`= MOTIVATION =
    • Author :: ${randomQuote.author}
    • Quote :: ${randomQuote.text}`, {code: "asciidoc"});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["motivational", "motivationquote"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "motivation",
    category: "Miscelaneous",
    description: "Provides a random motivational quote.",
    usage: "motivation"
  };
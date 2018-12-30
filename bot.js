const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("528674143068225558")
setInterval(function() {
channel.send(`spy spy spy`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
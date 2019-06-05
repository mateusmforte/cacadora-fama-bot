const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('pong');
	}
});

client.login('NTg1NjIxMDEzMzE3MDI1Nzky.XPf8sg.yqeJup-W8jJhJkD3N3kfCmw2MJo');

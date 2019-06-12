const botconfig = require('./botconfig.json');
const Discord = require('discord.js');
const DB  = require('node-a')
const bot = new Discord.Client();


bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`);
	bot.user.setActivity('Playing Code');
});
//Teste (Deletar mais tarde)
bot.on('message', async msg => {
	if (msg.content.toUpperCase() === 'PING') {
		msg.reply('pong');
	}
});

//Mensagem quando usuário é adicionado ao servidor
bot.on('guildMemberAdd', async member => {
	console.log(`${member} joined the server`);
	const channel = member.guild.channels.find(ch => ch.name === 'general');
	if (!channel) return;

	channel.send(`${member} caiu no stun da Caçadora`);
});
//M
bot.on('message', async msg => {
	if (msg.content.toUpperCase() === 'HEY CAÇADORA')
		msg.channel.send(`${msg.author} maricona, vai guiando!`);
});

//Trap da Karolzynha
bot.on('message', async msg => {
	let prefix = botconfig.prefix;
	let messageArray = msg.content.split(' ');
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	if (cmd === `${prefix}trap`) {
		let userTrapped = msg.guild.member(
			msg.mentions.users.first() || msg.guild.members.get(args[0])
		);
		if (!userTrapped)
			return msg.channel.send(
				'Não é assim que se coloca uma trap seu noob! tente mandar a trap corretamente digitando !trap @<nome do usuário>'
			);
		msg.channel.send(`${userTrapped} caiu na trap da Karolzynha!!!`);
	}
});
bot.login(process.env.token);

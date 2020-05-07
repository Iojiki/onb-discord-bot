// Upfront working stuff
require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

// Event Handler for Commands and Events
fs.readdir('./events/', (err, files) => {
	files.forEach(file => {
		const eventHandler = require('./events/' + file);
		const eventName = file.split('.')[0];
		client.on(eventName, (...args) => eventHandler(client, ...args));
	});
});

// Login token redirect to env
client.login(process.env.BOT_TOKEN);
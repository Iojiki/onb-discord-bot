// Kick Event - Message Handler
const kick = require('../commands/kick.js');
const startgame = require('../commands/startgame.js');
const joingame = require('../commands/joingame.js');
module.exports = (client, message) => {

	if (message.content.startsWith('/kick')) {
		return kick(message, client);
	}
	if (message.content.startsWith('/startgame')) {
		return startgame(message, client);
	}
	if (message.content.startsWith('/joingame')) {
		return joingame(message, client);
	}
};


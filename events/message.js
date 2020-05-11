// Kick Event - Message Handler
const kick = require('../commands/kick.js');
module.exports = (client, message) => {

	if (message.content.startsWith('/kick')) {
		return kick(message, client);
	}
};

// Start Game Event = Message Handler
const startgame = require('../commands/startgame.js');
module.exports = (client, message) => {

	if (message.content.startsWith('/startgame')) {
		return startgame(message, client);
	}
};

// JOin Game Event = Message Handler
const joingame = require('../commands/joingame.js');

module.exports = (client, message) => {
	if (message.content.startsWith('/joingame')) {
		return joingame(message, client);
	}
};
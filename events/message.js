// Kick Event - Message Handler
const kick = require('../commands/kick.js');
module.exports = (client, message) => {

	if (message.content.startsWith('!kick')) {
		return kick(message);
	}
};


module.exports = (client, message) => {
	let inputString = (client.content).substr((client.content).indexOf(' ') + 1);
	let uniqueNumber = '0';
	inputString = inputString.replace(/\s+/g, '-').toLowerCase();
	let gameName = inputString;

	if(inputString == 'startgame') {
		return client.channel.send('Please include a Game Name in the format "startgame [game name]"');
	}
	else if (client.guild.channels.cache.find(c => c.name == gameName)) {
		while(client.guild.channels.cache.find(c => c.name == gameName)) {
			uniqueNumber = (parseInt(uniqueNumber, 10) + 1).toString();
			gameName = inputString + '-' + uniqueNumber;
		}
		startIt();
	}
	else{
		startIt();
	}

	// Functions
	function startIt() {

		client.guild.channels.create(gameName, 'text')
			.then(channel => {
				const category = client.guild.channels.cache.find(c => c.name == 'Games in Progress' && c.type == 'category');
				channel.setParent(category.id);
				channel.overwritePermissions([
					{
						// Everyone Role
						id: client.guild.roles.everyone.id,
						deny: ['VIEW_CHANNEL'],
					},
					{
						// Bot Permissions
						id: message.user.id,
						allow: ['VIEW_CHANNEL'],
					},
					{
						// Person Using the Command
						id: client.author.id,
						allow: ['VIEW_CHANNEL'],
					},
				]);
			});
	}


};
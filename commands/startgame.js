module.exports = (client, message) => {
	let inputString = (client.content).substr((client.content).indexOf(' ') + 1);
	let uniqueNumber = '0';
	inputString = inputString.replace(/\s+/g, '-').toLowerCase();
	const randomString = Math.random().toString(36).substring(2, 6) + Math.random().toString(10).substring(2, 6);
	let gameName = inputString + '﹙' + randomString + '﹚';

	if(inputString == '/startgame') {
		return client.channel.send('Please include a Game Name in the format "startgame [game name]"');
	}
	else if (client.guild.channels.cache.find(c => c.name == gameName)) {
		while(client.guild.channels.cache.find(c => c.name == gameName)) {
			uniqueNumber = (parseInt(uniqueNumber, 10) + 1).toString();
			gameName = inputString + '﹙' + randomString + '﹚' + '-' + uniqueNumber;
		}
		createTextChannel();
		createVoiceChannel();

	}
	else{
		createTextChannel();
		createVoiceChannel();
	}

	// Functions
	function createTextChannel() {
		// Create Text Channel
		client.guild.channels.create(gameName, {
			type: 'text',
		})
			.then(channel => {
				const category = client.guild.channels.cache.find(c => c.name == 'Games in Progress Text' && c.type == 'category');
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
	function createVoiceChannel() {
		client.guild.channels.create(gameName, {
			type: 'voice',
		})
			.then(channel => {
				const category = client.guild.channels.cache.find(c => c.name == 'Games in Progress Voice' && c.type == 'category');
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
module.exports = (client, message) => {
	// TO-DO FIX CHANNEL CREATE AND OVERWRITE PERMISSIONS
	// TO-DO Set channel name to be the game name in text line plus number plus 1
	// console.log(client.content);
	// console.log(client.guild.channels.name);
	// const channels = client.guild.channels.cache.name;
	const inputString = (client.content).substr((client.content).indexOf(' ') + 1);
	/* 	channels.forEach(name => {
		if (name == inputString) {
			console.log('A Match');
		}
		else{
			console.log('This is a unique name');
		}

	}); */

	if(inputString == 'startgame') {
		return client.channel.send('Please include a Game Name in the format "startgame [game name]"');
	}
	else{

		client.guild.channels.create(inputString, 'text')
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
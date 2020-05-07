module.exports = (client, message) => {
	// TO-DO FIX CHANNEL CREATE AND OVERWRITE PERMISSIONS
	// TO-DO Set channel name to be the game name in text line plus number plus 1
	client.guild.channels.create('testserver', 'text')
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
};
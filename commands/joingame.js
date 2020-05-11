module.exports = (client) => {
	const inputString = (client.content).substr((client.content).indexOf(' ') + 1);
	const guildChannels = client.guild.channels.cache;
	const inputRoomCode = inputString.split('﹙').pop().split('﹚')[0];

	if (inputString == '/joingame') {
		return client.channel.send('Please include a Valid Game Room Code');
	}
	else{
		let isValidRoom = true;
		guildChannels.forEach(channel => {
			const channelRoomCode = (channel.name).split('﹙').pop().split('﹚')[0];
			if (channelRoomCode == inputRoomCode) {
				console.log('Yes');
				channel.updateOverwrite(client.author.id, { VIEW_CHANNEL: true });
			}
			else{
				isValidRoom = false;
			}

		});
		if (isValidRoom == false) {
			return client.channel.send('This is not a valid Game Room Code');
		}
	}

};
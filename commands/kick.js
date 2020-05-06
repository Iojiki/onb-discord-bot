// Kick Command
module.exports = message => {
	const member = message.mentions.members.first();

	if(!member) {
		return message.reply(
			'Please enter the name of a user you want to kick as \'@[USERNAME]\'',
		);
	}

	if(!member.kickable) {
		return message.reply('This member cannot be kicked.');
	}

	return member
		.kick()
		.then(() => message.reply('${member.user.tag} was kicked.'))
		.catch(() => message.reply('An error occurred, please try again later'));
};


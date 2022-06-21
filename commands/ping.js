const { SlashCommandBuilder } = require('@discordjs/builders');

const command = {}

command.data = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with Pong!');

command.execute = async interaction => {
	await interaction.reply('Pong!');
};

module.exports = command;
const { SlashCommandBuilder } = require('@discordjs/builders');

const command = {}

command.data = new SlashCommandBuilder()
	.setName('channel-id')
	.setDescription('Return id of given channel.')
	.addStringOption(option =>
		option
			.setName('channel')
			.setDescription('The channel.')
			.setRequired(true));

command.execute = async interaction => {
	// console.log(interaction)
	const name = interaction.options.getString('channel');
	const channel = interaction.guild.channels.cache.find(channel => channel.name === name);
	if (!channel) return interaction.reply({content: `${name} doesn't exist.`, ephemeral: true });
	interaction.reply({content: `${name}: ${channel.id}`, ephemeral: true });
};

module.exports = command;
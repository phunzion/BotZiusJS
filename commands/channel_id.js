const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('channel_id')
		.setDescription('Return id of given channel.')
		.addStringOption(option => 
			option
			.setName('channel')
			.setDescription('The channel.')
			.setRequired(true)),
	async execute(interaction) {
		// console.log(interaction)
		const name = interaction.options.getString('channel');
		const channel = interaction.guild.channels.cache.find(channel => channel.name === name);
		if (!channel) return interaction.reply(`${name} doesn't exist.`);
		return interaction.reply(`${name}: ${channel.id}`);
	},
};
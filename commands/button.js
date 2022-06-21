const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const command = {};

command.data = new SlashCommandBuilder()
	.setName('button')
	.setDescription('Example of button!');

command.execute = async interaction => {
	const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('primary')
				.setLabel('Primary')
				.setStyle('PRIMARY')
				.setEmoji('785062885952192512')
		);
	const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Some title')
		.setURL('https://discord.js.org')
		.setDescription('Some description here.');
	await interaction.reply({ content: 'Press button!', ephemeral: true, embeds: [embed], components: [row] });
};

command.executeButton = async interaction => {
	console.log(interaction)
	await interaction.reply('Presionado!');
};

module.exports = command;
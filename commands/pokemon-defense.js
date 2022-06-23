const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')
const { PokemonTypes } = require('../utils/pokemon/pokemon-types.js');
const { pokemon } = require('../utils/pokemon/tables.js');

const command = {}

command.data = new SlashCommandBuilder()
	.setName('pokemon-defense')
	.setDescription('Calculate the defense of a pokemon depending on its types.')
	.addStringOption(option =>
		option
			.setName('type1')
			.setDescription('First Type.')
			.setRequired(true))
	.addStringOption(option =>
		option
			.setName('type2')
			.setDescription('Second Type.'));

command.execute = async interaction => {
	const type1 = interaction.options.getString('type1');
	const type2 = interaction.options.getString('type2');
	const pt = new PokemonTypes(pokemon);
	pt.setTypesByName(type1, type2);
	const result = pt.result(true);

	const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle(`Pokemon ${(type2) ? `${type1}/${type2}` : type1} defenses`)
		.addField('Muy efectivo', result['4'].join(', '))
		.addField('Efectivo', result['2'].join(', '))
		.addField('Poco efectivo', result['0.5'].join(', '))
		.setTimestamp();
	await interaction.reply({ ephemeral: true, embeds: [embed] });
};

module.exports = command;
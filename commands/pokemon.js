const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { reset } = require('nodemon');
const { PokemonTypes } = require('../utils/pokemon/pokemon-types.js');
const { pokemon } = require('../utils/pokemon/tables.js');

const command = {}

command.data = new SlashCommandBuilder()
	.setName('pokemon')
	.setDescription('Stregths or weaknesses of a pokemon depending on its types.')
	.addStringOption(option =>
		option
			.setName('target')
			.setDescription('Strength or weakness.')
			.setRequired(true)
			.setAutocomplete(true))
	.addStringOption(option =>
		option
			.setName('type1')
			.setDescription('First Type.')
			.setRequired(true)
			.setAutocomplete(true))
	.addStringOption(option =>
		option
			.setName('type2')
			.setDescription('Second Type.')
			.setAutocomplete(true));

command.execute = async interaction => {
	const target = interaction.options.getString('target')
	const type1 = interaction.options.getString('type1');
	const type2 = interaction.options.getString('type2');
	const pt = new PokemonTypes(pokemon);
	pt.setTypesByName(type1, type2);
	const result = pt.result(target === 'weakness');

	const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle(`Pokemon ${(type2) ? `${type1}/${type2}` : type1} ${target}`)
		.setTimestamp();

	if (result['4']) embed.addField('Effectivity x4:', result['4'].join(', '));
	if (result['2']) embed.addField('Effectivity x2:', result['2'].join(', '));
	if (result['0.5']) embed.addField('Effectivity 1/2:', result['0.5'].join(', '));
	if (result['0.25']) embed.addField('Effectivity 1/4:', result['0.25'].join(', '));
	if (result['0']) embed.addField('No effect:', result['0'].join(', '));

	await interaction.reply({ ephemeral: true, embeds: [embed] });
};

module.exports = command;
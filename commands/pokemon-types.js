const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { PokemonTypes } = require('../utils/pokemon/pokemon-types.js');
const { pokemon } = require('../utils/pokemon/tables.js');

const command = {}

command.data = new SlashCommandBuilder()
	.setName('pokemon-types')
	.setDescription('Stregths or weaknesses of a pokemon depending on its types.')
	.addBooleanOption(option =>
		option
			.setName('weakness')
			.setDescription('Modes: True for Weakness or False for Strength')
			.setRequired(true))
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
	const weakness = interaction.options.getBoolean('weakness')
	const type1 = interaction.options.getString('type1');
	const type2 = interaction.options.getString('type2');

	const pt = new PokemonTypes(pokemon);
	pt.setTypesByName(type1, type2);
	try {
		const result = pt.result(weakness);

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Pokemon Types')
			.setDescription(`${weakness ? 'Weaknesses' : 'Strengths'} of ${(type2 && type1 != type2) ? `${type1}/${type2}` : `${type1}`}`)
			.setTimestamp();
		if (result['4']) embed.addField('Effectivity x4:', result['4'].join(', '));
		if (result['2']) embed.addField('Effectivity x2:', result['2'].join(', '));
		if (result['0.5']) embed.addField('Effectivity 1/2:', result['0.5'].join(', '));
		if (result['0.25']) embed.addField('Effectivity 1/4:', result['0.25'].join(', '));
		if (result['0']) embed.addField('No effect:', result['0'].join(', '));
		
		await interaction.reply({ ephemeral: true, embeds: [embed] });
	} catch (err) {
		await interaction.reply({ content: 'Error. Use valid options of option list.', ephemeral: true })
	}
};

module.exports = command;
const { SlashCommandBuilder } = require('@discordjs/builders');
const { PokemonTypes } = require('../utils/pokemon/pokemon-types.js');
const { pokemon } = require('../utils/pokemon/tables.js');

const command = {}

command.data = new SlashCommandBuilder()
	.setName('pokemon-attack')
	.setDescription('Calculate the attack of a pokemon depending on its types.')
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
	const result = pt.result(false);
	interaction.reply({content: JSON.stringify(result), ephemeral: 'true'});
};

module.exports = command;
const {pokemon} = require('../utils/pokemon/tables');
const event = {};

event.name = 'interactionCreate';

event.execute = async interaction => {
    if (!interaction.isAutocomplete()) return;

    // console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered "${interaction.commandName}" autocomplete interaction.`);

    if (interaction.commandName === 'pokemon') {
		const focusedOption = interaction.options.getFocused(true);
		let choices;

		if (focusedOption.name === 'target') {
			choices = ['strength', 'weakness'];
		}

		if (focusedOption.name === 'type1') {
			choices = pokemon.types;
		}
		
		if (focusedOption.name === 'type2') {
			choices = pokemon.types;
		}
		const filtered = choices.filter(choice => choice.includes(focusedOption.value));
		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
	}
}

module.exports = event;
const { pokemon } = require('../utils/pokemon/tables');
const event = {};

const choicesCache = pokemon.types.slice().sort();

event.name = 'interactionCreate';

event.execute = async interaction => {
    if (!interaction.isAutocomplete()) return;

    // console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered "${interaction.commandName}" autocomplete interaction.`);

    if (interaction.commandName === 'pokemon-types') {
		const focusedOption = interaction.options.getFocused(true);
		let choices;

		if (focusedOption.name === 'weakness') {
			choices = [true, false];
		}

		if (focusedOption.name === 'type1') {
			choices = choicesCache;
		}
		
		if (focusedOption.name === 'type2') {
			choices = choicesCache;
		}
		const filtered = choices.filter(choice => choice.includes(focusedOption.value));
		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
	}
}

module.exports = event;
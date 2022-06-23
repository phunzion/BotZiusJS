const event = {};

event.name = 'interactionCreate';

event.execute = async interaction => {
    if (!interaction.isButton()) return;

	const command = interaction.client.commands.get(interaction.message.interaction.commandName);
    
	if (!command) return;

    console.log(`${interaction.user.tag} in #${interaction.channel.name} press a button.`);

	try {
		await command.executeButton(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error after pressing this button!', ephemeral: true });
	}
}

module.exports = event;
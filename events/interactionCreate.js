const event = {};

event.name = 'interactionCreate';

event.execute = async interaction => {
    if (!interaction.isCommand()) return;
    
    const command = interaction.client.commands.get(interaction.commandName);
    
    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered "${interaction.commandName}" interaction.`);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
}

module.exports = event;
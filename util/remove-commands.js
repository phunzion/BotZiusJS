const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../config.json');

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Deleting all (/) commands.');

    rest.get(Routes.applicationGuildCommands(clientId, guildId))
    .then(data => {
        const promises = [];
        for (const command of data) {
            const deleteUrl = `${Routes.applicationGuildCommands(clientId, guildId)}/${command.id}`;
            // console.log(command)
            promises.push(rest.delete(deleteUrl));
        }
        return Promise.all(promises);
    });

    console.log('Successfully deleted (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
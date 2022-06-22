const event = {};

event.name = 'ready';

event.once = true;

event.execute = client => {
    console.log(`Ready! Logged in as ${client.user.tag}.`);
}

module.exports = event;
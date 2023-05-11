const bot = require("./bot");

const client = new bot({ intents: 3276543 }); // use intent calculator for this

client.build();

module.exports = client;

module.exports = {
  name: "ping",
  description: "Affiche le ping actuel du bot",
  disabled: false,
  options: [],
  run: async (client, interaction) => {
    const startTime = Date.now();
    await interaction.followUp({ content: "Pinging..." });
    const endTime = Date.now();
    const ping = endTime - startTime;
    await interaction.editReply({ content: `Pong! Le ping est de ${ping} ms.` });
  },
};

module.exports = {
    name: "test",
    description: "Test de commande",
    options: [],
    run: async (client, interaction) => {
      await interaction.followUp("Test");
    }
  };
  
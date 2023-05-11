module.exports = {
    name: "clear",
    description: "Supprime un certain nombre de messages.",
    options: [
      {
        name: "amount",
        description: "Nombre de messages à supprimer.",
        type: 4,
        required: true
      }
    ],
    run: async (client, interaction) => {
      const amount = interaction.options.getInteger("amount");
  
      if (amount < 1 || amount > 100) {
        return await interaction.followUp({
          content: "Le nombre de messages à supprimer doit être compris entre 1 et 100.",
          ephemeral: true
        });
      }
  
      try {
        await interaction.channel.bulkDelete(amount);
        await interaction.followUp({
          content: `J'ai supprimé ${amount} messages.`,
          ephemeral: false
        });
      } catch (err) {
        console.error(err);
        await interaction.followUp({
          content: "Une erreur est survenue lors de la suppression des messages.",
          ephemeral: true
        });
      }
    }
  }
  
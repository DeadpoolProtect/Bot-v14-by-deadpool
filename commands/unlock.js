module.exports = {
    name: "unlock",
    description: "Déverrouille le canal actuel.",
    options: [],
    permissions: ["MANAGE_CHANNELS"], // Permission requise pour utiliser la commande.
    run: async (client, interaction) => {
      const channel = interaction.channel;
      if (!channel) return;
      await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
        SendMessages: true,
      });
      await interaction.followUp({ content: "Ce salon a été déverrouillé ! 🔓", ephemeral: false });
    },
  };
  
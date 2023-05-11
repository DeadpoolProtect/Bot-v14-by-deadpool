module.exports = {
    name: "avatar",
    description: "Affiche l'avatar d'un utilisateur",
    options: [
      {
        name: "utilisateur",
        type: 6,
        description: "L'utilisateur dont afficher l'avatar",
        required: false
      }
    ],
    run: async (client, interaction) => {
      const user = interaction.options.getUser("utilisateur") || interaction.user;
      const avatarUrl = user.avatarURL({ dynamic: true, size: 2048 });
      const embed = {
        title: `${user.username}'s Avatar`,
        color: 0x2F3136, // Remplacez #2F3136 par 0x2F3136
        image: { url: avatarUrl },
        footer: { text: "Voir plus grand", icon_url: avatarUrl }
      };
      try {
        await interaction.followUp({ embeds: [embed], ephemeral: false });
      } catch (error) {
        console.error(error);
        await interaction.followUp({ content: "Une erreur est survenue lors de l'affichage de l'avatar", ephemeral: true });
      }
    }
  };
  
module.exports = {
    name: "ban",
    description: "Banni un utilisateur du serveur",
    options: [
      {
        name: "utilisateur",
        type: 6,
        description: "L'utilisateur à bannir",
        required: true
      },
      {
        name: "raison",
        type: 3,
        description: "La raison du bannissement",
        required: false
      }
    ],
    run: async (client, interaction) => {
      const user = interaction.options.getUser("utilisateur");
      const reason = interaction.options.getString("raison") || "Pas de raison spécifiée";
      const member = interaction.guild.members.cache.get(user.id);
      
      if (member) {
        try {
          await member.ban({ reason: reason });
          await interaction.followUp({ content: `${user.tag} a été banni avec succès pour la raison suivante: ${reason}`, ephemeral: false });
        } catch (error) {
          await interaction.followUp({ content: "Une erreur est survenue lors du bannissement de l'utilisateur", ephemeral: false });
        }
      } else {
        await interaction.followUp({ content: "Cet utilisateur n'est pas membre de ce serveur", ephemeral: false });
      }
    }
  };
  
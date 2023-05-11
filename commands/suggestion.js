module.exports = {
    name: 'suggestion',
    description: 'Permet aux utilisateurs de faire des suggestions pour le serveur',
    options: [
      {
        name: 'suggestion',
        type: 3,
        description: 'La suggestion à faire',
        required: true,
      },
    ],
    run: async (client, interaction) => {
      // Récupérer la suggestion depuis les options de la commande
      const suggestion = interaction.options.getString('suggestion');
  
      // Envoyer la suggestion dans un canal dédié
      const channel = interaction.guild.channels.cache.find(
        (channel) => channel.name === 'suggestions'
      );
  
      if (!channel) {
        return await interaction.followUp({
          content:
            "Le canal 'suggestions' n'a pas été trouvé sur le serveur",
          ephemeral: true,
        });
      }
  
      const embed = {
        title: 'Nouvelle suggestion',
        description: suggestion,
        color: 0xffd700,
        author: {
          name: interaction.member.displayName,
          icon_url: interaction.user.displayAvatarURL(),
        },
        timestamp: new Date(),
      };
  
      await channel.send({ embeds: [embed] });
  
      // Répondre à l'utilisateur pour confirmer l'envoi de la suggestion
      await interaction.followUp({
        content: 'Merci pour votre suggestion !',
        ephemeral: true,
      });
    },
  };
  
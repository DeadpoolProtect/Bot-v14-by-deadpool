module.exports = {
    name: "userinfo",
    description: "Récupère les informations sur un utilisateur",
    options: [
      {
        name: "utilisateur",
        type: 6,
        description: "L'utilisateur dont vous voulez obtenir les informations",
        required: false,
      },
    ],
    run: async (client, interaction) => {
      const user = interaction.options.getUser("utilisateur") || interaction.user;
      const member = interaction.guild.members.cache.get(user.id);

      const isBot = user.bot ? "Oui" : "Non"; // Vérifie si l'utilisateur est un bot

      const userRoles = member.roles.cache
        .sort((a, b) => b.position - a.position)
        .map(role => role.toString())
        .slice(0, -1);
  
      const embed = {
        author: {
          name: user.tag,
          icon_url: user.avatarURL(),
        },
        thumbnail: {
          url: user.avatarURL(),
        },
        fields: [
          {
            name: "ID",
            value: user.id,
          },
          {
            name: "Pseudo",
            value: member.nickname ? member.nickname : "Aucun",
          },
          {
            name: "Compte créé le",
            value: user.createdAt.toLocaleDateString(),
          },
          {
            name: "A rejoint le",
            value: member.joinedAt.toLocaleDateString(),
          },
          {
            name: "Bot",
            value: isBot,
          },
          {
            name: `Rôles [${member.roles.cache.size - 1}]`,
            value: userRoles.length ? userRoles.join(", ") : "Aucun rôle",
          },
        ],
        timestamp: new Date(),
      };
  
      await interaction.followUp({ embeds: [embed] });
    },
  };

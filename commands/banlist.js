module.exports = {
    name: "banlist",
    description: "Affiche la liste des utilisateurs bannis du serveur",
    options: [],
    run: async (client, interaction) => {
      const bans = await interaction.guild.bans.fetch();
      const banList = bans.map(ban => `**${ban.user.tag}** - *${ban.user.id}*`).join("\n");
  
      const embed = {
        color: 0xff0000,
        title: "Liste des utilisateurs bannis",
        description: banList || "Aucun utilisateur n'est banni de ce serveur",
        timestamp: new Date(),
        footer: {
          text: "Bot créé par !Deadpool#0430"
        }
      };
  
      await interaction.followUp({ embeds: [embed] });
    }
  };
  
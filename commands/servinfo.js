module.exports = {
    name: "servinfo",
    description: "Affiche des informations sur le serveur",
    options: [],
    run: async (client, interaction) => {
      const guild = interaction.guild;
      const memberCount = guild.memberCount;
      const roles = guild.roles.cache.size;
      const channels = guild.channels.cache.filter(channel => channel.type === "GUILD_TEXT").size;
      const createdDate = guild.createdAt.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });
      const ownerId = guild.ownerId;
      const serverId = guild.id;
      const owner = await guild.members.fetch(ownerId);
      const infoEmbed = {
        color: 0x0099ff,
        title: `Informations sur le serveur ${guild.name}`,
        fields: [
          { name: "Créé le", value: createdDate },
          { name: "Propriétaire", value: owner.user.tag },
          { name: "Membres", value: memberCount },
          { name: "Rôles", value: roles },
          { name: "Salons de texte", value: channels },
          { name: "ID du serveur", value: serverId }
        ],
        timestamp: new Date(),
        footer: {
          text: "Bot créé par !Deadpool#0430"
        }
      };
      await interaction.followUp({ embeds: [infoEmbed] });
    }
  };
  
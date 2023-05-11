module.exports = {
  name: "roleall",
  description: "Ajoute un rôle à tous les membres du serveur",
  options: [
    {
      name: "rôle",
      type: 8,
      description: "Le rôle à ajouter",
      required: true
    }
  ],
  run: async (client, interaction) => {
    const role = interaction.options.getRole("rôle");
    const guild = interaction.guild;

    try {
      // Ajouter le rôle à tous les membres du serveur, y compris les absents
      guild.members.fetch().then(members => {
        members.forEach(member => member.roles.add(role));
      });
      
      await interaction.followUp({ content: `Le rôle ${role.name} a été ajouté à tous les membres du serveur`, ephemeral: false });
    } catch (error) {
      console.error(error);
      await interaction.followUp({ content: "Une erreur est survenue lors de l'ajout du rôle à tous les membres", ephemeral: false });
    }
  }
};

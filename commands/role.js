module.exports = {
    name: "role",
    description: "Ajoute un rôle à un membre du serveur",
    options: [
      {
        name: "membre",
        type: 6,
        description: "Le membre à qui ajouter le rôle",
        required: true
      },
      {
        name: "rôle",
        type: 8,
        description: "Le rôle à ajouter",
        required: true
      }
    ],
    run: async (client, interaction) => {
      const member = interaction.options.getMember("membre");
      const role = interaction.options.getRole("rôle");
  
      try {
        await member.roles.add(role);
        
        await interaction.followUp({ content: `Le rôle ${role.name} a été ajouté à ${member.user.tag}`, ephemeral: false });
      } catch (error) {
        console.error(error);
        await interaction.followUp({ content: "Une erreur est survenue lors de l'ajout du rôle", ephemeral: false });
      }
    }
  };
  
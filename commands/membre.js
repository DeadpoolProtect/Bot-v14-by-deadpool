module.exports = {
    name: "membre",
    description: "Compte le nombre de membres sur le serveur",
    run: async (client, interaction) => {
      const guild = interaction.guild;
      const memberCount = guild.memberCount;
  
      await interaction.followUp(`Il y a ${memberCount} membres sur ce serveur.`);
    },
  };
  
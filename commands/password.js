module.exports = {
    name: "password",
    description: "Génère un mot de passe aléatoire",
    options: [
      {
        name: "longueur",
        description: "La longueur du mot de passe (entre 6 et 20 caractères)",
        type: 4,
        required: true,
        choices: [
          { name: "6 caractères", value: 6 },
          { name: "8 caractères", value: 8 },
          { name: "10 caractères", value: 10 },
          { name: "12 caractères", value: 12 },
          { name: "16 caractères", value: 16 },
          { name: "20 caractères", value: 20 }
        ]
      }
    ],
    run: async (client, interaction) => {
      const length = interaction.options.getInteger("longueur");
  
      // Vérifier que la longueur est valide
      if (length < 6 || length > 20) {
        return await interaction.followUp({ content: "La longueur du mot de passe doit être comprise entre 6 et 20 caractères.", ephemeral: true });
      }
  
      // Générer le mot de passe aléatoire
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
      let password = "";
      for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
  
      // Envoyer le mot de passe à l'utilisateur
      await interaction.followUp({ content: `Voici votre mot de passe : \`${password}\``, ephemeral: true });
    }
  };
  
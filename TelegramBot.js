const { Telegraf, Markup } = require("telegraf");

class TelegramBot {
  constructor(token) {
    this.bot = new Telegraf(token);
    this.setupCommands();
  }

  setupCommands() {
    this.bot.start((ctx) => {
      ctx.reply(
        "Bienvenue ! Commencez à interagir avec le bot.\n\n Faites le choix de votre role",
        Markup.inlineKeyboard([
          Markup.button.callback("User", "user"),
          Markup.button.callback("Analyst", "analyst"),
        ])
      );
    });

    // user
    this.bot.action("user", (ctx) => {
      ctx.reply("Vous etes un utilisateur je travaille encore sur vos fonctionalité.");
    });
    
    // analyst 
    this.bot.action("analyst", (ctx) => {
      ctx.reply("Analyst de meede .");
    });

    this.bot.help((ctx) =>
      ctx.reply(
        "Voici les commandes disponibles:\n\n/start - Commencez à interagir avec le bot.\n/help - Obtenez des informations d'aide sur les commandes disponibles.\n/analyze <adresse du portefeuille> eth - Déchargement par portefeuille."
      )
    );

    this.bot.command("analyze", (ctx) => {
      const commandArguments = ctx.message.text.split(" ");
      if (commandArguments.length !== 3) {
        ctx.reply(
          "Utilisation incorrecte de la commande. Utilisez /analyze <adresse du portefeuille> eth"
        );
      } else {
        const address = commandArguments[1];
        const currency = commandArguments[2];
        ctx.reply(
          `Demande de déchargement pour l'adresse : ${address}, devise : ${currency}`
        );

        // Ici, vous pouvez implémenter la logique pour générer et envoyer le document Excel
      }
    });
  }

  start() {
    this.bot.launch();
  }
}

module.exports = TelegramBot;

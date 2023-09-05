const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const TelegramBot = require('./TelegramBot'); // Chemin vers le fichier de la classe

const token = '6622074049:AAEGyVxn05xHp1ovP5Q1MHzH1lLO0oeu1FM'; // Remplacez par le véritable jeton d'accès de votre bot
const bot = new TelegramBot(token);

bot.start(); 

app.use(bodyParser.json("application/json"));

// run the node js app
app.listen(3000, () => {
  console.log("Server started ...");
});
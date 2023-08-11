const { Client, GatewayIntentBits, Partials, Events } = require("discord.js");
const config = require("./config.json");
const botRes = require("./bot.js");

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.GuildScheduledEvent,
  ],
});

client.on("ready", () => {
  console.log("Hey i am ready");
});

const validateInput = function (input) {
  return input !== "rock" && input !== "paper" && input !== "scissor";
};

client.on(Events.MessageCreate, (msg) => {
  let content = msg.content.toLowerCase();

  if (msg.author.bot) {
    console.log("The response is from the bot");
    return;
  }

  if (validateInput(content)) {
    msg.reply("Please Enter rock/paper/scissor");
  }

  let res4mBot = botRes.getBotResponse();
  console.log("reponse " + res4mBot);

  if (res4mBot == "") {
    msg.reply("Something has gone wrong");
  }

  if (res4mBot === content) {
    msg.reply("No one won!!");
  }

  if (content === "rock") {
    if (res4mBot == "paper") {
      msg.reply("bot won!!");
    } else if (res4mBot == "scissor") {
      msg.reply("you won!!");
    }
  } else if (content === "paper") {
    if (res4mBot == "scissor") {
      msg.reply("bot won!!");
    } else if (res4mBot == "rock") {
      msg.reply("you won!!");
    }
  } else if (content === "scissor") {
    if (res4mBot == "paper") {
      msg.reply("bot won!!");
    } else if (res4mBot == "scissor") {
      msg.reply("you won!!");
    }
  }
});

client.login(config.token);

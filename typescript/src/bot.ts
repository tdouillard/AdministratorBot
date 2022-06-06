import { debug } from "console";
import { Client } from "discord.js";
import dot from 'dotenv';
import { createInteraction } from "./events/interaction.event";
import { ready } from "./events/ready.event";
dot.config();

debug("Bot is starting...");

const client = new Client({
    intents: []
});
//start discord bot events
ready(client);
createInteraction(client);
//login to bot to discord
client.login(process.env.BOT_TOKEN)
// debug(client);
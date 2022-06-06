import { debug } from "console";
import { Client } from "discord.js";
import { Commands } from "../commands";

export const ready = (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        await client.application.commands.set(Commands);
        debug(`${client.user.username} is online`);
    });
};
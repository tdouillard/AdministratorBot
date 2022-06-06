import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "./command.interface";

export const Hello: Command = {
    name: "ping",
    description: "Test bot",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "Pong!";
        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
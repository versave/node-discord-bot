import { Message } from 'discord.js';
import { randomIndex } from "../utils";
import { botPhrasesLabels } from "../bot-data";
import { commandsLabels } from "../bot-data";

const { lafLabels } = commandsLabels;

module.exports = {
    name: 'laf',
    description: lafLabels.description,
    execute: (message: Message, args: string[]) => {
        message.channel.send(botPhrasesLabels[randomIndex(botPhrasesLabels.length)]);
    }
}

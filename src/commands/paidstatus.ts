import { Message } from 'discord.js';
import {subscribers} from "../subscribers/spotify-subscribers";
import { commandsLabels } from "../bot-data";

const { paidstatusLabels } = commandsLabels;

module.exports = {
    name: 'paidstatus',
    description: paidstatusLabels.description,
    execute: (message: Message, args: string[]) => {
        const formattedStringArr = subscribers.map((sub) => `${sub.alias.toUpperCase()}: ${sub.paid ? paidstatusLabels.paidMessage : paidstatusLabels.paymentDueMessage}`);

        message.channel.send(formattedStringArr.join(`\n`));
    }
}



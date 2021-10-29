import { Message } from 'discord.js';
import {
    setPaidStatusForSubs,
    setPaymentStatusForAll,
    subscribersSettings
} from "../subscribers/subscribers";
import { subscribers } from "../subscribers/spotify-subscribers";
import { commandsLabels } from "../bot-data";

const { paidLabels } = commandsLabels;
const subscriberAliases = subscribers.map(sub => sub.alias);
const paidCommandArgs = `all, ${subscriberAliases.join(', ')}`;

module.exports = {
    name: 'paid',
    description: `${paidLabels.description}: ${paidCommandArgs}`,
    execute: (message: Message, args: string[]) => {
        if(message.author.id === subscribersSettings.subCommandExecutorId) {
            if(args.includes(subscribersSettings.paidSubCommands.All)) {
                setPaymentStatusForAll(true);
                message.channel.send(paidLabels.paidMessage);
                return;
            }

            setPaidStatusForSubs(subscriberAliases.filter(sub => args.includes(sub)), true);
            message.channel.send(paidLabels.paidMessage);
        } else {
            message.channel.send(paidLabels.noAccessMessage);
        }
    }
}


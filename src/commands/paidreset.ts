import { Message } from 'discord.js';
import {
    setPaidStatusForSubs,
    setPaymentStatusForAll,
    subscribersSettings
} from "../subscribers/subscribers";
import { subscribers } from "../subscribers/spotify-subscribers";
import { commandsLabels } from "../bot-data";

const { paidresetLabels } = commandsLabels;
const subscriberAliases = subscribers.map(sub => sub.alias);
const paidCommandArgs = `all, ${subscriberAliases.join(', ')}`;

module.exports = {
    name: 'paidreset',
    description: `${paidresetLabels.description}: ${paidCommandArgs}`,
    execute: (message: Message, args: string[]) => {
        if(message.author.id === subscribersSettings.subCommandExecutorId) {
            if(args.includes(subscribersSettings.paidSubCommands.All)) {
                setPaymentStatusForAll(false);
                message.channel.send(paidresetLabels.paidMessage);
                return;
            }

            setPaidStatusForSubs(subscriberAliases.filter((sub) => args.includes(sub)), false);
            message.channel.send(paidresetLabels.paidMessage);
        } else {
            message.channel.send(paidresetLabels.noAccessMessage);
        }
    }
}


import { subscribers } from './spotify-subscribers'
import { TextChannel } from "discord.js";
import { miscLabels } from "../bot-data";

require('dotenv').config();

enum PaidSubCommands {
    All = 'all',
}
export const subscribersSettings = {
    subscriberAnnouncementsChannelId: process.env.SUBSCRIBER_ANNOUNCEMENTS_CHANNEL_ID ?? '',
    subCommandExecutorId: miscLabels.subCommandExecutorId,
    paidSubCommands: PaidSubCommands,
    lastPaymentMonth: 0,
    paymentMonths: [1, 4, 7, 10],
    subscriptionPriceFor3Months: miscLabels.spotifyTax,
}
const payResetDate = 19;

export const notifySubscribersForPayment = (channel: TextChannel) => {
    const payDueSubscribers = subscribers.filter(sub => !sub.paid);

    if(!payDueSubscribers.length) return;

    const payDueSubscriberMentions = payDueSubscribers.map(sub => `<@${sub.id}>`);
    const messageWarning = `${miscLabels.spotifyMessage} ${payDueSubscriberMentions.join(' ')} ${subscribersSettings.subscriptionPriceFor3Months}`;

    channel?.send(messageWarning);
}

export const setPaymentStatusForAll = (paid: boolean) => {
    subscribers.forEach(sub => {
        sub.paid = paid;
    });
}

export const setPaidStatusForSubs = (subs: string[], status: boolean) => {
    if(!subs.length) return;

    subscribers.forEach(sub => {
        if(subs.includes(sub.alias)) {
            sub.paid = status;
        }
    });
}

const handleGetResetPaymentStatus = () => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const lastPaymentMonth = subscribersSettings.lastPaymentMonth;
    const isDifferentMonth = currentMonth !== lastPaymentMonth;

    if(
        today.getDate() === payResetDate
        && isDifferentMonth
        && subscribersSettings.paymentMonths.includes(currentMonth)
    ) {
        subscribersSettings.lastPaymentMonth = today.getMonth();
        return true;
    }

    return false;
}

export const handleCronJob = (channel: TextChannel) => {
    if(handleGetResetPaymentStatus()) {
        setPaymentStatusForAll(false);
        return;
    }

    notifySubscribersForPayment(channel);
}

import { Message } from "discord.js";
import { UserModel } from './models';
import { randomIndex } from "./utils";
import { userSpecificLabels } from "./bot-data";

export const users: UserModel[] = [
    {
        name: userSpecificLabels.stanislav.name,
        id: userSpecificLabels.stanislav.id,
        nextMessageTime: new Date(0, 0, 0),
        executeFor: (message: Message) => {
            const personalPhrases = userSpecificLabels.stanislav.phrases;

            message
                .channel
                .send(`<@${message.author.id}> ${personalPhrases[randomIndex(personalPhrases.length)]}`);
        }
    },
    {
        name: userSpecificLabels.ivo.name,
        id: userSpecificLabels.ivo.id,
        nextMessageTime: new Date(0, 0, 0),
        executeFor: (message: Message) => {
            const personalPhrases = userSpecificLabels.ivo.phrases;

            message
                .channel
                .send(`<@${message.author.id}> ${personalPhrases[randomIndex(personalPhrases.length)]}`);
        }
    },
    {
        name: userSpecificLabels.valio.name,
        id: userSpecificLabels.valio.id,
        nextMessageTime: new Date(0, 0, 0),
        executeFor: (message: Message) => {
            const personalPhrases = userSpecificLabels.valio.phrases;

            message
                .channel
                .send(`<@${message.author.id}> ${personalPhrases[randomIndex(personalPhrases.length)]}`);
        }
    },
    {
        name: userSpecificLabels.sami.name,
        id: userSpecificLabels.sami.id,
        nextMessageTime: new Date(0, 0, 0),
        executeFor: (message: Message) => {
            const personalPhrases = userSpecificLabels.sami.phrases;

            message
                .channel
                .send(`<@${message.author.id}> ${personalPhrases[randomIndex(personalPhrases.length)]}`);
        }
    },
    {
        name: userSpecificLabels.boshko.name,
        id: userSpecificLabels.boshko.id,
        nextMessageTime: new Date(0, 0, 0),
        executeFor: (message: Message) => {
            const personalPhrases = userSpecificLabels.boshko.phrases;

            message
                .channel
                .send(`<@${message.author.id}> ${personalPhrases[randomIndex(personalPhrases.length)]}`);
        }
    },
    {
        name: userSpecificLabels.miro.name,
        id: userSpecificLabels.miro.id,
        nextMessageTime: new Date(0, 0, 0),
        executeFor: (message: Message) => {
            const personalPhrases = userSpecificLabels.miro.phrases;

            message
                .channel
                .send(`<@${message.author.id}> ${personalPhrases[randomIndex(personalPhrases.length)]}`);
        }
    },
    {
        name: userSpecificLabels.misho.name,
        id: userSpecificLabels.misho.id,
        nextMessageTime: new Date(0, 0, 0),
        executeFor: (message: Message) => {
            const personalPhrases = userSpecificLabels.misho.phrases;

            message
                .channel
                .send(`<@${message.author.id}> ${personalPhrases[randomIndex(personalPhrases.length)]}`);
        }
    },
];

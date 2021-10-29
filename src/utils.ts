import {Client, TextChannel} from 'discord.js';

export const setTomorrowDate = (): Date => {
    const tomorrow = new Date();
    tomorrow.setHours(tomorrow.getHours() + 24);

    return tomorrow;
}

export const randomIndex = (length: number): number => Math.floor(Math.random() * length);

export const getChannelById = (client: Client, channelId: string) =>
     client.channels.cache.get(channelId) as TextChannel;


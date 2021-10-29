import { spotifySubscribersLabels } from "../bot-data";

export interface Subscriber {
    id: string;
    alias: string;
    paid: boolean;
}

interface SubscriberInfo extends Omit<Subscriber, 'paid'> {}

const makeSpotifySubscribers = (subsInfo: SubscriberInfo[]): Subscriber[] =>
    subsInfo.map(sub => ({...sub, paid: false}));

export const subscribers: Subscriber[] = makeSpotifySubscribers(spotifySubscribersLabels);

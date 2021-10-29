import { Message } from "discord.js";

export interface UserModel {
    name: string,
    id: string,
    nextMessageTime: Date;
    executeFor: (message: Message) => void;
}
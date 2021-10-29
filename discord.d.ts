declare module 'discord.js' {
    export interface Client {
        commands: Collection<string, any>
    }

    export interface Command {
        name: string,
        description: string,
        execute: (message: Message, args: string[]) => SomeType
    }
}
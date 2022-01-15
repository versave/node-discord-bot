import {
    Client,
    Message,
    Collection,
    Command,
} from 'discord.js';
import fs from 'fs';
import { CronJob } from 'cron';
import { users } from './users';
import { getChannelById, setTomorrowDate } from './utils';
import { handleCronJob, subscribersSettings } from './subscribers/subscribers';

require('dotenv').config();

const client: Client = new Client();
const prefix = '-';

client.commands = new Collection();

const commandFiles = fs.readdirSync(`${__dirname}/commands/`).filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const cmd: Command = require(`./commands/${file}`);
    client.commands.set(cmd.name, cmd);
}

const job = new CronJob('0 0 12,20 * * *', () => {
    const channel = getChannelById(client, subscribersSettings.subscriberAnnouncementsChannelId);
    handleCronJob(channel);
}, null, true, 'Europe/Sofia');

client.once('ready', () => {
    console.log('Online');
    job.start();
});

/*
    Handle commands
 */
client.on('message', (message: Message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const [cmd, ...args] = message
        .content
        .trim()
        .substring(prefix.length)
        .split(/\s+/)
        .map(arg => arg.toLowerCase());
    const clientCmd = client.commands.get(cmd.toLowerCase());

    if(clientCmd) clientCmd.execute(message, args);
});

/*
    Handle specific person commands
 */
client.on('message', (message: Message) => {
    const user = users.find(user => user.id === message.author.id);

    if(message.content.startsWith(prefix) || message.author.bot || !user) return;

    if(new Date() > user.nextMessageTime) {
        user.executeFor(message);
        user.nextMessageTime = setTomorrowDate();
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);


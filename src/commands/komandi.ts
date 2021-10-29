import { EmbedFieldData, Message, MessageEmbed } from 'discord.js';
import { commandsLabels } from "../bot-data";

const { komandiLabels } = commandsLabels;

module.exports = {
    name: 'komandi',
    description: komandiLabels.description,
    execute: (message: Message) => {
        const commandFields: EmbedFieldData[] = message.client.commands.map(cmd => <EmbedFieldData>{ name: `-${cmd.name}`, value: cmd.description });

        const embed = new MessageEmbed()
            .setColor('4CEA69')
            .setTitle(komandiLabels.embedTitle)
            .setDescription(komandiLabels.embedDescription)
            .addFields(commandFields);

        message.channel.send(embed);
    }
}

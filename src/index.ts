import { create, MessageType } from 'venom-bot';
import { Client, TextChannel, MessageEmbed } from 'discord.js';

import type { HostDevice } from './types';
import config from './config';

(async () => {
  const DISCORD_CLIENT = new Client(config.discord.client);

  await new Promise<void>((resolve) => {
    DISCORD_CLIENT.on('ready', async () => {
      console.log(`[Discord] Logged in as ${DISCORD_CLIENT.user?.tag}!`);
      resolve();
    });

    DISCORD_CLIENT.login(config.discord.token);
  });

  const VENOM_CLIENT = await create({ session: `test`, disableWelcome: true, disableSpins: true }).then(async (client) => {
    console.log(`[WhatsApp] Logged in as ${((await client.getHostDevice()) as unknown as HostDevice).formattedTitle}!`);
    return client;
  });

  DISCORD_CLIENT.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.channel.id != config.discord.zapChannelId) return;

    await VENOM_CLIENT.sendText(
      ((await VENOM_CLIENT.getHostDevice()) as unknown as HostDevice).id._serialized,
      `${message.author.tag}:\n${message.content}`
    );
  });

  VENOM_CLIENT.onMessage(async (message) => {
    if (message.sender.isMe) return;
    if (message.type !== MessageType.TEXT) return;

    const channel = (await DISCORD_CLIENT.channels.fetch(config.discord.zapChannelId as string)) as TextChannel;

    if (!channel || !channel.isText()) return;

    const embed = new MessageEmbed();
    embed.setAuthor(message.sender.pushname, message.sender.profilePicThumbObj.imgFull);
    embed.setDescription(message.content);

    await channel.send({ embed: embed });
  });
})();

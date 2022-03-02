import { ClientOptions, Intents } from 'discord.js';

export default {
  discord: {
    token: process.env.DISCORD_TOKEN,
    zapChannelId: process.env.DISCORD_ZAP_CHANNEL_ID,
    client: {
      ws: { intents: Intents.ALL },
    } as ClientOptions,
  },
};

<p align="center">
  <a href="https://github.com/BrunoS3D">
    <img alt="Removing" src="./.github/discozap.png" style="max-width: 548px"/>
  </a>
</p>

<h1 align="center">
  discozap
</h1>

<h3 align="center">
  📞 WhatsApp proxy for Discord.
</h3>

## Installation

Clone project

```
git clone git@github.com:BrunoS3D/discozap.git
cd discozap
```

Install dependencies

```sh
yarn install # or just yarn
```

Create environment variable files `.env` and `.env.dev` based on [.env.example](./.env.example) on project root folder

```bash
# linux / macOS
cp .env.example .env
cp .env.example .env.dev
```

```bash
# windows
copy .env.example .env
copy .env.example .env.dev
```

## Running on development environment

> ⚠ Remember to follow the [Installation](#Installation) steps before proceeding

Running the bot

```sh
yarn dev
```

> ⚠ Note that the loaded environment variables file is `.env.dev`

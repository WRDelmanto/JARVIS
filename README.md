## Project Info
#### # ====================================
#### # Author:		William Rodrigues Delmanto
#### # Description:	J.A.R.V.I.S. Discord Bot
#### # ====================================

## About
J.A.R.V.I.S. is a functional and extensible **Discord bot** designed to enhance user interaction within any server. The bot is built to support custom commands, moderation tools, and utility functions that can be easily expanded depending on server needs.

The goal of this project is to provide a modular, clean, and scalable Discord bot architecture using modern development practices.

## Features
- Command handler system for scalability  
- Utility functions (ping, help, etc.)  
- Moderation commands (kick, ban, purge, etc.)  
- Role and permission checks  
- Easy configuration and deployment  

## Technical Stack
- **Runtime**: Node.js  
- **Framework**: Discord.js  
- **Command Management**: Modular handler system  
- **Hosting**: Can be deployed on any Node.js-compatible server (Heroku, Render, VPS, etc.)

## Setup Instructions
### Prerequisites
- [Node.js](https://nodejs.org/en/)
- A Discord account and server
- A Discord bot token ([Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html))
- (Optional) [Visual Studio Code](https://code.visualstudio.com/) for development

### Installation
1. Clone the repository:
```bash
git clone https://github.com/WRDelmanto/JARVIS
cd JARVIS
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables:
Create a `.env` file in the root directory with the following content:
```
DISCORD_TOKEN=your-bot-token-here
```

4. Run the bot:
```bash
node index.js
```

## Disclaimer
J.A.R.V.I.S. is built for educational and experimental purposes. Use responsibly in accordance with Discord’s Terms of Service.

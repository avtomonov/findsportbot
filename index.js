const TelegramApi = require('node-telegram-bot-api')

const token = '7152266992:AAFD_zjMxh-7X05tgLscr7e1Yy_ScKPP1Hw'

const bot = new TelegramApi(token, {polling: true})

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, msg);
});
// Thankyou messages
let msgs = [
    `Thanks♥`,
    `Tysm♥`,
    `Thank You♥`,
    `Thank You💖`,
]
var options = Math.floor(Math.random() * msgs.length);
var thanks = msgs[options]
//whatsapp settings
const wa = require('@open-wa/wa-automate');
wa.create({
    sessionId: "Birthday",
    authTimeout: 60, //wait only 60 seconds to get a connection with the host account device
    blockCrashLogs: true,
    disableSpins: true,
    headless: true,
    hostNotificationLang: 'PT_BR',
    logConsole: false,
    popup: true,
    qrTimeout: 0, //0 means it will wait forever for you to scan the qr code
  }).then(client => start(client));

  function start(client) {
    client.onMessage(async message => {
      if(message.body.toLowerCase().includes('birthday')) return client.sendText(message.from, thanks);
      if(message.body.toLowerCase().includes('bday')) return client.sendText(message.from,thanks);
      if(message.body.toLowerCase().includes('happy birthday')) return client.sendText(message.from,thanks);
      if(message.body.toLowerCase().includes('born day')) return client.sendText(message.from, thanks);
      if(message.body.toLowerCase().includes('bornday')) return client.sendText(message.from, thanks);
      if(message.body.toLowerCase().includes('birthday day')) return client.sendText(message.from, thanks);
      
    });
}

//instagram settings
const Insta = require('@androz2091/insta.js');

const client = new Insta.Client();


client.on('connected', () => {
    console.log(`Logged in as ${client.user.username}`);
});
client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return

    message.markSeen();

    if(message.content.toLowerCase().includes('happy birthday')) return message.chat.sendMessage(thanks);
    if(message.content.toLowerCase().includes('birthday')) return message.chat.sendMessage(thanks);
    if(message.content.toLowerCase().includes('bday')) return message.chat.sendMessage(thanks);
    if(message.content.toLowerCase().includes('bornday')) return message.chat.sendMessage(thanks);
    if(message.content.toLowerCase().includes('born day')) return message.chat.sendMessage(thanks);      
    if(message.content.toLowerCase().includes('birth day')) return message.chat.sendMessage(thanks);   
    
});

client.login('username', 'pass'); // enter the account info for which you wanna use the bot
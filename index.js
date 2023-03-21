const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

const phoneNumber = '50769859805';
const messageText = 'HOLA, MAMÁ';

client.on('message', message => {


    if (message.body === 'pendejo') {
        client.sendMessage(message.from, 'tu mamá');
    }
    else if(message.body === 'hola'){
        client.sendMessage(message.from, 'hola que tal!');
    }
    else if(message.body === '9'){

        client.sendMessage(`${phoneNumber}@c.us`, messageText);
    }
    else{
        client.sendMessage(message.from, 'hola, buenos dias!, selecciona 9 por que si');
    }
});


client.initialize();

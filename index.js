const { ChatApp } = require('./chat');

let webinarChat =  new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat =       new ChatApp('---------vk');

let chatOnMessage = (message) => {
    console.log(message);
};

webinarChat.on('message', chatOnMessage);
facebookChat.on('message', chatOnMessage);
vkChat.on('message', chatOnMessage);

setTimeout( ()=> {
    console.log('Закрываю вконтакте...');
    vkChat.removeListener('message', chatOnMessage);
}, 10000 );

setTimeout( ()=> {
    console.log('Закрываю фейсбук, все внимание — вебинару!');
    facebookChat.removeListener('message', chatOnMessage);
}, 15000 );

/*
Часть 1
    Добавить обработчик события message для Чата Вебинара (webinarChat), который выводит в консоль сообщение 'Готовлюсь к ответу'. Обработчик создать в отдельной функции.
    Для Вконтакте (vkChat) установить максимальное количество обработчиков событий, равное 2.
    Добавить обработчик 'Готовлюсь к ответу' из пункта 1.1 к чату Вконтакте.
Часть 2
    В классе чата ChatApp добавить метод close, который будет вызывать событие close (событие вызывается один раз, setInterval как в констукторе, не нужен).
    Для чата вконтакте (vkChat) добавить обработчик close, выводящий в консоль текст "Чат вконтакте закрылся :(".
    Вызывать у чата вконтакте метод close().
Дополнительное задание
    Добавить код, который через 30 секунд отписывает chatOnMessage от вебинара webinarChat.
    Разбить существующий код на модули, запускаемый файл должен быть index.js или index.js
*/

// 1.1
function preparingToAnswerMessageHandler() {
    console.log('Готовлюсь к ответу');
}

webinarChat.on('message', preparingToAnswerMessageHandler);

// 1.2
vkChat.setMaxListeners(2);

// 1.3
vkChat.on('message', preparingToAnswerMessageHandler);

// 2.2 

vkChat.on('close', () => { console.log('Чат вконтакте закрылся :('); });

// 2.3

vkChat.close();

// 3.1
setTimeout(() => { webinarChat.removeListener('message', chatOnMessage) }, 30 * 1000);
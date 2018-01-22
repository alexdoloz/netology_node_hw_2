const EventEmitter = require('events');

class ChatApp extends EventEmitter {
  /**
   * @param {String} title
   */
  constructor(title) {
    super();

    this.title = title;

    setInterval(() => {
      this.emit('message', `${this.title}: ping-pong`);
  }, 1000);
  }
}

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
  console.log('Р—Р°РєСЂС‹РІР°СЋ РІРєРѕРЅС‚Р°РєС‚Рµ...');
vkChat.removeListener('message', chatOnMessage);
}, 10000 );

setTimeout( ()=> {
  console.log('Р—Р°РєСЂС‹РІР°СЋ С„РµР№СЃР±СѓРє, РІСЃРµ РІРЅРёРјР°РЅРёРµ вЂ” РІРµР±РёРЅР°СЂСѓ!');
facebookChat.removeListener('message', chatOnMessage);
}, 15000 );
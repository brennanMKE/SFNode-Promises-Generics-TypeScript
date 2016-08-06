'use strict';

interface Message {
  text: string;
}

let log = function (message?: Message) {
  console.log(message.text);
};

let doAsyncWork = function (): Promise<Message> {
  let p = new Promise<Message>(function (resolve, reject) {

    log({ text: 'I\'m working here!' });

    setTimeout(function () {
      let isOdd = Date.now() % 2 === 1;
      if (isOdd) {
        resolve({ text: 'We are all going to die.' });
      }
      else {
        let error = new Error('I cannot work anymore. I am dead.');
        reject(error);
      }
    }, 250);
  });

  return p;
};

doAsyncWork().then((result) => {
  log(result);
}, (error) => {
  log({ text: error.message });
});

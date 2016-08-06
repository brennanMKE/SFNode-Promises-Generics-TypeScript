'use strict';

import * as Each from './eachItem';

Each.eachItem([5, 7, 1, 6, 9, 2], (item) => {
  let p = new Promise<any>((resolve, reject) => {
    console.log(item);
    if (item !== 3) {
      resolve(true);
    }
    else {
      let error = new Error('I do not like 3s: ' + item);
      reject(error);
    }
  });

  return p;
}).then(() => {
  console.log('Done');
}).catch((error) => {
  if (error.message) {
    console.log('Error: ' + error.message);
  }
  if (error.index) {
    console.log('Error at index: ' + error.index);
  }
});

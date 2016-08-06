'use strict';

import Actions from './actions';

// Chained promises, clean code

Actions.eat()
  .then(Actions.sleep)
  .then(Actions.wake)
  .then(Actions.run)
  .then(Actions.work)
  .then(Actions.play)
  .then(Actions.fly)
  .catch((error) => {
    console.log(error);
  });

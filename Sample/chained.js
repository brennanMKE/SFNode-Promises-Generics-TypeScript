'use strict';
const actions_1 = require('./actions');
actions_1.default.eat()
    .then(actions_1.default.sleep)
    .then(actions_1.default.wake)
    .then(actions_1.default.run)
    .then(actions_1.default.work)
    .then(actions_1.default.play)
    .then(actions_1.default.fly)
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=chained.js.map
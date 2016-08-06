'use strict';
let timeout = 100;
function createPromise(verb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(verb);
            resolve(true);
        }, timeout);
    });
}
let eat = function () {
    return createPromise('Eat');
};
let sleep = function () {
    return createPromise('Sleep');
};
let wake = function () {
    return createPromise('Wake');
};
let run = function () {
    return createPromise('Run');
};
let work = function () {
    return createPromise('Work');
};
let play = function () {
    return createPromise('Play');
};
let fly = function () {
    return createPromise('Fly');
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    eat: eat,
    sleep: sleep,
    wake: wake,
    run: run,
    work: work,
    play: play,
    fly: fly
};
//# sourceMappingURL=actions.js.map
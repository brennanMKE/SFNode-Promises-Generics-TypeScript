'use strict';

let timeout = 100;

/** 
 * Private function which returns a promise 
 * just to simplify the sample code below.
 * */
function createPromise(verb: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(verb);
      resolve(true);
    }, timeout);
  });
}

/**
 * Eat
*/
let eat = function(): Promise<boolean> {
  return createPromise('Eat');
};

/**
 * Sleep
*/
let sleep = function(): Promise<boolean> {
  return createPromise('Sleep');
};

/** 
 * Wake
*/
let wake = function(): Promise<boolean> {
  return createPromise('Wake');
};

/**
 * Run
*/
let run = function(): Promise<boolean> {
  return createPromise('Run');
};

/** 
 * Work
*/
let work = function(): Promise<boolean> {
  return createPromise('Work');
};

/** 
 * Play
*/
let play = function(): Promise<boolean> {
  return createPromise('Play');
};

/** 
 * Fly
*/
let fly = function(): Promise<boolean> {
  return createPromise('Fly');
};

export default {
  eat: eat,
  sleep: sleep,
  wake: wake,
  run: run,
  work: work,
  play: play,
  fly: fly
};

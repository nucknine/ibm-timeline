/* globals Handlebars */

import Module from './file.js';

console.log(Module.hello());

const arr = ['a', 34, 'd'];

arr.includes('d') ? console.log('ES6 includes work') : 0;

async function foo() {
    await bar();
}

function bar() {
    console.log('ES6 async functions work!');
}

foo();
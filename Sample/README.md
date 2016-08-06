# Sample for TypeScript, Promises and Generics

This sample project shows how TypeScript can be used with Promises and Generics and edited with [VSCode].

## Setup

Running `setup.sh` from the Mac Terminal will use `npm` to install the necessary tools. Then running commands such as `npm install`, `typings install` and `tsc -w` will run the install and transpile tasks. You can also use `Grunt` to run various tasks.

### TypeScript

In `app.ts` you will find an example of [TypeScript] which shows an imported module which is used to access and run a function. The `eachItem` function demonstrates Promises and Generics. 

### Promises

In `promise.ts` and `chained.ts` you will find examples of using Promises which were introduced in ES6 and have replaced the callback model which was common with earlier versions of Node.js. The chained example shows how a series of actions can be put in sequence in a very readable way.

### Generics

The above examples use Generics to set the type for the return values of the Promises. With TypeScript this type is enforced and if the code is not correct VSCode will highlight the error.

## Configuration

Examples of configuring VSCode can be found in the `.vscode` folder. See `launch.json`, `settings.json` and `tasks.json`. Beyond configuring VSCode you will find `tsconfig.json`, `tslint.json` and `typings.json` which are used to support the TypeScript transpiler, syntax checking and coding standards.

## Debugging

With `launch.json` configured you can run the debugger and with sourcemaps enabled you can place breakpoints in TypeScript files. And while Node.js is executing the JavaScript files the sourcemaps allow VSCode to stop on the breakpoints set in the TypeScript files. As you debug through the code you can inspect variables and add watches which will remain in place for repeated debugging sessions.

## Feedback

If you have any feedback you'd like to share please create a new issue on GitHub on this repository.

## License

MIT

---

Brennan Stehling - 2016

[https://github.com/brennanMKE](https://github.com/brennanMKE)

[VSCode]: https://code.visualstudio.com
[TypeScript]: https://www.typescriptlang.org
[Grunt]: http://gruntjs.com

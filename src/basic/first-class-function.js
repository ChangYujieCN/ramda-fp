// 1. 把函数赋值给变量
// const foo = function() {
//     console.log("foobar");
// }
// 用变量来调用它
// foo();

// 2. 传递一个函数作为参数
// function sayHello() {
//     return "Hello, ";
// }
// function greeting(helloMessage, name) {
//     console.log(helloMessage() + name);
// }
// // 传递 `sayHello` 作为 `greeting` 函数的参数
// greeting(sayHello, "JavaScript!");
// sayHello() 函数就是一个回调函数。
// 3. 返回一个函数
// function sayHello2() {
//   return function () {
//     console.log('Hello!');
//   };
// }
// sayHello2()();

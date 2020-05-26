import React, { useCallback, useState } from "react";
import {
  andThen,
  any,
  compose,
  composeP,
  composeWith,
  curry,
  equals,
  filter,
  gt,
  gte,
  invoker,
  lens,
  lte,
  map,
  pickBy,
  reduce,
  prop,
  propSatisfies,
  sum,
  propEq,
  reject,
  pick,
  sortBy,
} from "ramda";
import Example from "./Example";

function CurryingApp() {
  // 1. uncurried version
  // const formatName1 = function (first, middle, last) {
  //   return first + " " + middle + " " + last;
  // };
  // console.log(formatName1('John', 'Paul', 'Jones'));
  // console.log(formatName1('John', 'Paul'));

  // 2. curried version
  // const formatNames2 = curry(function (first, middle, last) {
  //   return first + " " + middle + " " + last;
  // });
  // console.log(formatNames2("John", "Paul", "Jones"));
  // const jp = formatNames2("John", "Paul"); //=> returns a function
  // console.log("jp is", jp);
  // console.log(jp("Jones"));
  // console.log(jp("Stevens"));
  // console.log(jp("Pontiff"));
  // console.log(jp("Ziller"));
  // console.log(jp("Georgeandringo"));
  // 3. More meaningful example
  // Plain JS:
  // const add = function (a, b) {
  //   return a + b;
  // };
  // const numbers = [1, 2, 3, 4, 5];
  // const sum = numbers.reduce(add, 0);
  // console.log(sum);
  // Ramda.js
  // const sum2 = reduce(add, 0, numbers);
  // console.log(sum2);
  // const sumF = reduce(add, 0);
  // console.log(sumF(numbers));
  // That's why currying helps.
  // const data = {
  //   result: "SUCCESS",
  //   interfaceVersion: "1.0.3",
  //   requested: "10/17/2013 15:31:20",
  //   lastUpdated: "10/16/2013 10:52:39",
  //   tasks: [
  //     {
  //       id: 104,
  //       complete: false,
  //       priority: "high",
  //       dueDate: "2013-11-29",
  //       username: "Scott",
  //       title: "Do something",
  //       created: "9/22/2013",
  //     },
  //     {
  //       id: 105,
  //       complete: false,
  //       priority: "medium",
  //       dueDate: "2013-11-22",
  //       username: "Lena",
  //       title: "Do something else",
  //       created: "9/22/2013",
  //     },
  //     {
  //       id: 107,
  //       complete: true,
  //       priority: "high",
  //       dueDate: "2013-11-22",
  //       username: "Mike",
  //       title: "Fix the foo",
  //       created: "9/22/2013",
  //     },
  //     {
  //       id: 108,
  //       complete: false,
  //       priority: "low",
  //       dueDate: "2013-11-15",
  //       username: "Punam",
  //       title: "Adjust the bar",
  //       created: "9/25/2013",
  //     },
  //     {
  //       id: 110,
  //       complete: false,
  //       priority: "medium",
  //       dueDate: "2013-11-15",
  //       username: "Scott",
  //       title: "Rename everything",
  //       created: "10/2/2013",
  //     },
  //     {
  //       id: 112,
  //       complete: true,
  //       priority: "high",
  //       dueDate: "2013-11-27",
  //       username: "Lena",
  //       title: "Alter all quuxes",
  //       created: "10/5/2013",
  //     },
  //   ],
  // };
  // const fetchTasks = () =>
  //   new Promise((resolve, reject) => {
  //     resolve(data);
  //   });
  // const getIncompleteTaskSummaries = function (membername) {
  //   return fetchTasks()
  //     .then(function (data) {
  //       return data.tasks;
  //     })
  //     .then(function (tasks) {
  //       const results = [];
  //       for (let i = 0, len = tasks.length; i < len; i++) {
  //         if (tasks[i].username === membername) {
  //           results.push(tasks[i]);
  //         }
  //       }
  //       return results;
  //     })
  //     .then(function (tasks) {
  //       const results = [];
  //       for (let i = 0, len = tasks.length; i < len; i++) {
  //         if (!tasks[i].complete) {
  //           results.push(tasks[i]);
  //         }
  //       }
  //       return results;
  //     })
  //     .then(function (tasks) {
  //       const results = [];
  //       let task;
  //       for (let i = 0, len = tasks.length; i < len; i++) {
  //         task = tasks[i];
  //         results.push({
  //           id: task.id,
  //           dueDate: task.dueDate,
  //           title: task.title,
  //           priority: task.priority,
  //         });
  //       }
  //       return results;
  //     })
  //     .then(function (tasks) {
  //       tasks.sort(function (first, second) {
  //         const a = first.dueDate,
  //           b = second.dueDate;
  //         return a < b ? -1 : a > b ? 1 : 0;
  //       });
  //       return tasks;
  //     })
  //     .then(function (tasks) {
  //       console.log(tasks);
  //     });
  // };
  // getIncompleteTaskSummaries("Scott");
  //
  // const getIncompleteTaskSummaries2 = function (membername) {
  //   return fetchTasks()
  //     .then(prop("tasks"))
  //     .then(filter(propEq("username", membername)))
  //     .then(reject(propEq("complete", true)))
  //     .then(map(pick(["id", "dueDate", "title", "priority"])))
  //     .then(sortBy(prop("dueDate")))
  //     .then(console.log);
  // };
  // getIncompleteTaskSummaries2("Scott");
  // Why do we always put callback first ?

  return <Example/>;
}

export default CurryingApp;

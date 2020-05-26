import React from 'react';
import {
  both,
  either,
  inc,
  multiply,
  pipe,
  equals,
  gte,
  defaultTo,
  ifElse,
  __,
  always,
  when,
  unless,
  lt,
  cond,
  T
} from 'ramda';

const Declarative = () => {
  /* ********** Math ***************  */
  // const multiply = (a, b) => a * b;
  // const addOne = (x) => x + 1;
  // const square = (x) => x * x;
  //
  // const operate = pipe(
  //     multiply,
  //     addOne,
  //     square
  // );
  // console.log(operate(3, 4));
  // const square = (x) => multiply(x, x);
  // const operate = pipe(multiply, inc, square);
  // console.log(operate(3, 4));
  /* ********** Compare ***************  */
  // const wasBornInCountry = person => person.birthCountry === "USA"
  // const wasNaturalized = person => Boolean(person.naturalizationDate)
  // const isOver18 = person => person.age >= 18
  //
  // const isCitizen = either(wasBornInCountry, wasNaturalized)
  //
  // const isEligibleToVote = both(isOver18, isCitizen)
  // -----------
  // const wasBornInCountry = (person) => equals(person.birthCountry, 'USA');
  // const wasNaturalized = (person) => Boolean(person.naturalizationDate);
  // const isOver18 = (person) => gte(person.age, 18);
  //
  // const isCitizen = either(wasBornInCountry, wasNaturalized);
  //
  // const isEligibleToVote = both(isOver18, isCitizen);
  /* ********** Default ***************  */
  // const settings = {
  //   lineWidth: undefined
  // };
  // const lineWidth = defaultTo(80, settings.lineWidth);
  // console.log(lineWidth);
  /* ********** Conditionals  *************** */
  // const forever21 = (age) => (age >= 21 ? 21 : age + 1);
  // const forever21_ = (age) => ifElse(gte(__, 21), () => 21, inc)(age);
  // console.log(forever21(39),forever21_(39))
  /* ********** Constant  *************** */
  // const forever21 = age => ifElse(gte(__, 21), always(21), inc)(age)
  /* ********** when & unless  *************** */
  // const alwaysDrivingAge = (age) => when(lt(__, 16), always(16))(age);
  // const alwaysDrivingAge2 = (age) => unless(gte(__, 16), always(16))(age);
  // console.log(alwaysDrivingAge(19), alwaysDrivingAge2(19));
  /* ********** Switch ***************  */
  // const water = (temperature) =>
  //   cond([
  //     [equals(0), always('water freezes at 0°C \n')],
  //     [equals(100), always('water boils at 100°C \n')],
  //     [T, (temp) => `nothing special happens at ${temp}°C \n`]
  //   ])(temperature);
  // console.log(water(68), water(100));
  return <div></div>;
};

export default Declarative;

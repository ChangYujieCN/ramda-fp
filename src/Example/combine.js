import React from 'react';
import {
  both,
  complement,
  compose,
  either,
  find,
  pipe
} from 'ramda';

const Combine = () => {
  // 1 find
  /***************************/
  // const isEven = x => x % 2 === 0
  // console.log(find(isEven, [1, 2, 3, 4]))
  /* =>*************************/
  // const isEven = x => x % 2 === 0
  // console.log(find(complement(isEven), [1, 2, 3, 4]));
  /*=>*************************/
  // const isEven = x => x % 2 === 0
  // const isOdd = complement(isEven)
  // console.log(find(isOdd, [1, 2, 3, 4]))
  /***************************/
  //2 voting system
  // const wasBornInCountry = person => person.birthCountry === "USA"
  // const wasNaturalized = person => Boolean(person.naturalizationDate)
  // const isOver18 = person => person.age >= 18
  // // const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person)
  // // const isEligibleToVote = person => isOver18(person) && isCitizen(person)
  // const isCitizen = either(wasBornInCountry, wasNaturalized)
  // const isEligibleToVote = both(isOver18, isCitizen)
  // 3 pipelines & compose

  const multiply = (a, b) => a * b;
  const addOne = (x) => x + 1;
  const square = (x) => x * x;
  /***************************/
  // const operate = (x, y) => {
  //   const product = multiply(x, y)
  //   const incremented = addOne(product)
  //   const squared = square(incremented)
  //
  //   return squared
  // }
  // console.log(operate(3, 4))
  /***************************/
  // const operate2 = pipe(multiply, addOne, square);
  // console.log(operate2(3, 4));
  /************ compose *************/
  const operate3 = (x, y) =>
    square(addOne(multiply(x, y)));
  console.log(operate3(3, 4));
  const operate4 = compose(
    square,
    addOne,
    multiply
  );
  console.log(operate4(3, 4));
  /***************************/
  // function doubleSay(str) {
  //   return str + ', ' + str;
  // }
  // function capitalize(str) {
  //   return (
  //     str[0].toUpperCase() + str.substring(1)
  //   );
  // }
  // function exclaim(str) {
  //   return str + '!';
  // }
  //
  // let result =
  //   'hello'
  //       |> doubleSay
  //       |> capitalize
  //       |> exclaim;
  // console.log(result)
  return <div></div>;
};

export default Combine;

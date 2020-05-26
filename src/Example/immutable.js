// 我们无法将所有函数转换为 pointfree 样式，因为我们缺少了一些工具。 现在是学习这些工具的时候了。
import React from 'react';
import {
  both,
  either,
  equals,
  prop,
  gte,
  __,
  compose,
  inc,
  assoc,
    multiply,
  nth,
  slice,
  has,
  head,
  tail,
  last,
  init,
  take,
  takeLast,
  insert,
  append,
  prepend,
  update,
  concat,
  remove,
  without,
  drop,
  dropLast
} from 'ramda';

const Immutable = () => {
  // const wasBornInCountry = person => person.birthCountry === "USA"
  // const wasNaturalized = person => Boolean(person.naturalizationDate)
  // const isOver18 = person => person.age >= 18
  //
  // const isCitizen = either(wasBornInCountry, wasNaturalized)
  // const isEligibleToVote = both(isOver18, isCitizen)
  /* ********** => ***************  */
  // const wasBornInCountry = person => equals(person.birthCountry, OUR_COUNTRY)
  // const wasNaturalized = person => Boolean(person.naturalizationDate)
  // const isOver18 = person => gte(person.age, 18)
  // const isCitizen = either(wasBornInCountry, wasNaturalized)
  // const isEligibleToVote = both(isOver18, isCitizen)
  /* ********** prop ***************  */
  // const wasBornInCountry = person => equals(prop('birthCountry', person), "USA")
  // const wasNaturalized = person => Boolean(prop('naturalizationDate', person))
  // const isOver18 = person => gte(prop('age', person), 18)
  // const isCitizen = either(wasBornInCountry, wasNaturalized)
  // const isEligibleToVote = both(isOver18, isCitizen)
  /* ********** swap args ***************  */
  // const wasBornInCountry = person => equals("USA", prop('birthCountry', person))
  // const wasNaturalized = person => Boolean(prop('naturalizationDate', person))
  // const isOver18 = person => gte(prop('age', person), 18)
  /* ********** apply currying ***************  */
  // const wasBornInCountry = person => equals("USA")(prop('birthCountry')(person))
  // const wasNaturalized = person => Boolean(prop('naturalizationDate')(person))
  // const isOver18 = person => gte(__, 18)(prop('age')(person))
  /* ********** compose ***************  */
  // const wasBornInCountry = (person) => compose(equals('USA'), prop('birthCountry'))(person);
  // const wasNaturalized = (person) => compose(Boolean, prop('naturalizationDate'))(person);
  // const isOver18 = (person) => compose(gte(__, 18), prop('age'))(person);
  /* ********** pointfree ***************  */
  // const wasBornInCountry = compose(equals('USA'), prop('birthCountry'));
  // const wasNaturalized = compose(Boolean, prop('naturalizationDate'));
  // const isOver18 = compose(gte(__, 18), prop('age'));
  //  pick  has path propOr pathOr keys values
  // 增删改查
  // assoc / assocPath  assoc('name', 'New name', person)  assocPath(['address', 'zipcode'], '97504', person)
  // dissoc / dissocPath / omit   dissoc('age', person)   dissocPath(['address', 'zipCode'], person)  pick omit
  // 庆祝生日
  // const nextAge = compose(inc, prop('age'));
  // const celebrateBirthday = (person) => assoc('age', nextAge(person), person);
  /* ********** evolve ***************  */
  // 为需要转换属性的值指定一个转换函数
  // const celebrateBirthday = evolve({ age: inc })

  /* ********** Immutable Array ***************  */
  // 读取数组元素
  const numbers = [10, 20, 30, 40, 50, 60];
  console.log(nth(3, numbers));
  console.log(nth(-2, numbers));
  console.log(slice(2, 5, numbers));
  console.log(has(20, numbers));
  console.log('---------------');
  console.log(head(numbers));
  console.log(tail(numbers));
  console.log(last(numbers));
  console.log(init(numbers));
  console.log(take(3, numbers));
  console.log(takeLast(3, numbers));
  // 增删改查
  console.log(insert(3, 35, numbers));
  console.log(append(70, numbers));
  console.log(prepend(0, numbers));
  console.log(update(1, 15, numbers));
  console.log(concat(numbers, [70, 80, 90]));
  console.log(remove(2, 3, numbers));
  console.log(without([30, 40, 50], numbers));
  console.log(drop(3, numbers));
  console.log(dropLast(3, numbers));
  console.log(update(2, multiply(10, nth(2, numbers)), numbers) )
  return <div></div>;
};

export default Immutable;

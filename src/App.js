import React, { useState } from 'react';
import {
  andThen,
  composeWith,
  filter,
  invoker,
  gte,
  __,
  map,
  prop,
  propSatisfies,
  sum
} from 'ramda';
import { Button, Card } from 'antd';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const getAmount1 = (url) => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data.people;
      })
      .then(function (people) {
        const result = people.filter(function (person) {
          return person.age >= 18;
        });
        return result;
      })
      .then(function (people) {
        const result = people.map(function (person) {
          return person.money;
        });
        return result;
      })
      .then(function (moneyArr) {
        const amount = moneyArr.reduce(function (accu, current) {
          return accu + current;
        }, 0);
        return amount;
      })
      .then(function (amount) {
        setAmount(amount);
      });
  };
  const getAmount2 = composeWith(andThen, [
    setAmount,
    sum,
    map(prop('money')),
    filter(propSatisfies(gte(__, 18), 'age')),
    prop('people'),
    invoker(0, 'json'),
    fetch
  ]);
  return (
    <>
      <Card title={'总额'}>{amount}</Card>
      <Button onClick={() => getAmount1('/people.json')}>看看我们有多少钱</Button>
    </>
  );
}

export default App;

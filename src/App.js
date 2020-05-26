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
  const [totalAmount, setTotalAmount] = useState(0);

  const getAmount = composeWith(andThen, [
    setTotalAmount,
    sum,
    map(prop('money')),
    filter(propSatisfies(gte(__, 18), 'age')),
    prop('people'),
    invoker(0, 'json'),
    fetch
  ]);
  return (
    <>
      <Card title={'总额'}>{totalAmount}</Card>
      <Button onClick={() => getAmount('/people.json')}>看看我们有多少钱</Button>
    </>
  );
}

export default App;

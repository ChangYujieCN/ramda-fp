import React, { Component, useState, useEffect } from 'react';

class SetState extends Component {
  state = {
    counter: 0
  };
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 }, alert('设置class component成功'));
  };
  render() {
    return (
      <div>
        <div>class component counter: {this.state.counter}</div>
        <button onClick={this.handleClick}>class component counter +1</button>
      </div>
    );
  }
}

const SetState2 = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter > 0) {
      alert('设置fp counter成功');
    }
  }, [counter]);
  return (
    <div>
      <div>hook component counter: {counter}</div>
      <button onClick={()=> setCounter(counter + 1)}>hook component counter +1</button>
    </div>
  );
};

export default SetState;
export { SetState, SetState2 };

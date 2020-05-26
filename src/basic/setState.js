import React, { Component, useState, useEffect } from 'react';

class SetState extends Component {
  state = {
    counter: 0
  };
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 }, alert('设置cp成功'));
  };
  render() {
    return (
      <div>
        <div>counter: {this.state.counter}</div>
        <Button onClick={this.handleClick}>+1</Button>
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
  return <div>{counter}</div>;
};

export default SetState;
export { SetState, SetState2 };

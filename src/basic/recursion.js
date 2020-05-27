for (let counter = 10; counter > 0; counter--) {
  console.log(counter);
}

const countdown = function (value) {
  if (value > 0) {
    console.log(value);
    return countdown(value - 1);
  } else {
    return value;
  }
};
countdown(10);

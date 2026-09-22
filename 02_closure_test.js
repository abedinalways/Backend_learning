let count = 0;

function outer() {
  let count = 10;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();
fn();
fn();

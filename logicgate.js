function and(...arg) {
  let and_output = true;
  arg.forEach((element) => {
    and_output = and_output && Boolean(element);
  });
  return and_output;
}

function or(...arg) {
  let or_output = false;
  arg.forEach((element) => {
    or_output = or_output || Boolean(element);
  });
  return or_output;
}

function not(input) {
  return !Boolean(input);
}

function nand() {
  let andGate = and(...arguments);
  return not(andGate);
}
function nor() {
  let orGate = or(...arguments);
  return not(orGate);
}

function xor(...arg) {
  let middle = Math.floor(arg.length / 2);

  let arr1 = arg.slice(0, middle);
  let arr2 = arg.slice(middle);

  let nand1 = nand(...arguments);
  let nand2 = nand(...arr1, nand1);
  let nand3 = nand(...arr2, nand1);
  let nand4 = nand(nand2, nand3);
  return nand4;
}

function xnor() {
  let xorGate = xor(...arguments);
  return not(xorGate);
}

let twoInputTest = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];
let fourInputTest = [
    [0, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [0, 1, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 1, 0],
    [1, 1, 1, 1],
  ];
  
fourInputTest.forEach((element) => {
  console.log(
    `A=${element[0]}, B=${element[1]} : Output = ${and(...element)}`
  );
});

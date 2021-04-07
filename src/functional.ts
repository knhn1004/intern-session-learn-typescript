// pure functions

let num = 123;

function toString(val: number): string {
  num = val;
  return val.toString();
}

const normalToString = (val: number): string => {
  return val.toString();
};

const str = toString(num);

// immutable data

const data = Object.freeze([1, 2, 3, 4, 5]);

// data[0] = 2;

// function as arguments

// const returnHello = () => 'hello';

// const testFunction = () => () => {};

const addStar = (val: number) => toString(val) + ' *';

// console.log(addStar(1));

const addSymbol = (symbol: string) => (num: number) => toString(num) + symbol;

const addDollar = addSymbol(' $');

console.log(addDollar(5));
console.log(addSymbol(' %')(3));

class ArrayOfNumbers {
  constructor(public numbers: number[]) {}

  get(index: number): number {
    return this.numbers[index];
  }
}

// const newNumbers = new ArrayOfNumbers([1, 2, 3]);
// newNumbers.get(2);

class ArrayOfStrings {
  constructor(public strings: string[]) {}

  get(index: number): string {
    return this.strings[index];
  }
}

// basic generics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const testNumbers = new ArrayOfAnything<number>([1, 2, 3, 4, 5]);

console.log(testNumbers.get(2));

// generic constraint

const obj = {
  print: () => console.log('1234'),
  color: 'red',
};

interface Printable {
  print(): void;
}

function printData<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

interface Computer {
  print(): void;
  name: string;
  brand: string;
}

const computers: Computer[] = [
  {
    print: () => console.log('hello'),
    brand: 'Dell',
    name: 'XPS-15',
  },
  {
    print: () => console.log('apple'),
    brand: 'Apple',
    name: 'Macbook Pro',
  },
];

printData<Computer>(computers);

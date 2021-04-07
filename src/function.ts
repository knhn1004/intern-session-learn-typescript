const add = (a: number, b: number): number => {
  return a + b;
};

function substract(a: number, b: number): number {
  return a - b;
}

// destructure

const numbers = [1, 2, 3, 4, 5];

const [num1, num2, num3, num4, num5] = numbers;
// console.log(num1);

interface TheCarProps {
  color: string;
  wheels: number;
  brand: string;
}

const theCar: TheCarProps = {
  color: 'red',
  wheels: 4,
  brand: 'BMW',
};

const { color, wheels, brand } = theCar;
// console.log(color);

// object is immutable
const theCarWithDoor = {
  ...theCar,
  door: 4,
};

// console.log(theCarWithDoor);

// desctructure + interface
const printCarDetails = ({ color, brand }: TheCarProps): void => {
  console.log(`color: ${color}`);
  console.log(`brand: ${brand}`);
};

printCarDetails(theCar);

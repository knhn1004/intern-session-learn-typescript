enum Color2 {
  Red,
  Blue,
  Green,
  Black,
}

class Vehicle {
  //   color: Color2;
  //   constructor(color: Color2) {
  //     this.color = color;
  //   }
  private power: number;
  constructor(public color: Color2, public door: number) {
    this.power = door * 5;
  }

  public drive(): void {
    console.log('~~~~~~~~~~~~~~~~~');
  }

  getPower(): number {
    return this.power;
  }

  get capacity(): number {
    return this.door * 2;
  }
}

class Car extends Vehicle {
  constructor(public color: Color2, public door: number) {
    super(color, door);
  }

  drive() {
    console.log('***************************');
  }
}

const car = new Car(Color2.Red, 4);

car.drive();

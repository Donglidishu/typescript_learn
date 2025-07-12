class GenericNumber<NumType> {
  defaultValue: NumType;
  add: (x: NumType, y: NumType) => NumType;

  //   constructor(value: NumType) {
  //     this.defaultValue = value;
  //   }
}

const myNum = new GenericNumber<number>();
myNum.defaultValue = 10;

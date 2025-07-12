// let person: { Name: string; Age: number; sayHi(): void; Greet(Name2: string): void } = {
//   Name: 'jack',
//   Age: 18,
//   sayHi() {},
//   Greet(Name2) {
//     console.log('hi');
//   },
// };

//接口：
// interface Iperson {
//   name: string;
//   age: number;
//   sayHi(): void;
// }

//类型别名
type Iperson = {
  name: string;
  age: number;
  sayHi(): void;
};

let person2: Iperson = {
  name: 'xzk',
  age: 18,
  sayHi() {},
};

let person3: Iperson = {
  name: 'xzk',
  age: 16,
  sayHi() {},
};

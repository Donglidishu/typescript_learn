// 1.直接使用{}来描述对象结构。属性采用属性名:类型的形式; 方法采用方法名():返回值类型的形式
// 2.如果方法有参数，就在方法名后面的小括号中指定参数类型(比如: greet()name:string: void).
// 3.在一行代码中指定对象的多个属性类型时, 使用;来分割.
// 如果一行代码只指定一个属性类型(通过换行来分隔多个属性类型), 可以去掉 ; (分号).
// 方法的类型也可以使用箭头函数形式(比如: {sayHi:() => void} ).

// let person: { Name: string; Age: number; sayHi(): void; Greet(Name2: string): void } = {
//   Name: 'jack',
//   Age: 18,
//   sayHi() {},
//   Greet(Name2) {
//     console.log('hi');
//   },
// };

//上述第三点的写法
let person: {
  Name: string;
  Age: number;
  sayHi(): void;
  sayHi: () => void;
  Greet(Name2: string): void;
} = {
  Name: 'jack',
  Age: 18,
  sayHi() {},
  Greet(Name2) {
    console.log('hi');
  },
};

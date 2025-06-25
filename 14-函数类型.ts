//1.单独指定参数和函数的返回值类型
//函数声明形式
function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(1, 2));

//函数表达式形式
const add2 = (num3: number, num4: number): number => {
  return num3 + num4;
};

//2.同时指定参数和返回值类型
const add3: (num5: number, num6: number) => number = (num5, num6) => {
  return num5 + num6;
};

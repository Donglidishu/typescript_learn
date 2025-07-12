//使用泛型创建一个函数

function id<Type>(value: Type): Type {
  return value;
}

//调用泛型函数
//1. 以number类型调用泛型函数
const num = id<number>(10);

// 2. 以string类型
const strr = id<string>('d');

//简化
let num11 = id(10);
let str22 = id('abc');

//泛型约束
//1.指定更加具体的类型
function id2<Type>(value: Type[]): Type[] {
  value.length;
  return value;
}

//添加约束
interface ILength {
  length: number;
}
function id3<Type extends ILength>(value: Type): Type {
  value.length;
  return value;
}
id(['a', 'b']);
id('abc');
id({ length: 10, name: 'jack' });
// id(123) 因为数值没有length属性

//多个泛型变量的情况
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
//这里的keyof指的是Type参数中包含的某一个键
getProp({ name: 'jack', age: 18 }, 'age');
getProp(18, 'toFixed'); //toFixed是数值具有的方法
getProp('abc', 'fixed');
getProp('abc', 1); //访问字符串的索引，数组同理

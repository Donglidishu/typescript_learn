//ts中数组的写法：
let numbers: number[] = [1, 3, 5];
// let numbers1: Array<number> = [1,3,5]; 不推荐
let bool1: boolean[] = [true, false];

//联合类型 由两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种
//添加小括号表示arr是个数组，且数组中有number或string类型元素
let arr: (number | string)[] = [1, 3, 'h', 's'];

//无小括号，表示可以给其分配number或string数组类型元素
let arr2: number | string[] = ['ss'];
let arr3: number | string[] = 123;

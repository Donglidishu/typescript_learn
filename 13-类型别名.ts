//为任意类型起别名
//当同一复杂类型被多次使用时，可以通过类型别名简化该类型的使用
//使用type关键字
type CustomArray = (number | boolean)[];
let cusarr: CustomArray = [true, 123, false];

//变量，值可以是任意字符串，所以类型为string
let str1 = 'hello ts';
//常量，值不能变化，只能是'hello ts' 所以类型为'hello ts'
//字面量类型，即某个特定的字符串也可以作为ts中的类型（对象、数字等）
const str2 = 'hello ts';

//配合联合类型一起使用，用来表示一组明确的可选值列表，比如贪吃蛇游戏中的上下左右
//相比string类型更加精确严谨
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
  console.log(direction);
}

changeDirection('up');

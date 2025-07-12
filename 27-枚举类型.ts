//枚举
//成员可以设置初始值
enum Direction {
  Up = 10,
  Down = 12,
  Left = 14,
  Right = 16,
}

//字符串枚举
// enum Direction {
//   Up = 'UP',
//   Down = 'DOWN',
//   Left = 'LEFT',
//   Right = 'RIGHT',
// }

function changeDirection2(direction: Direction) {
  console.log(direction);
}

changeDirection2(Direction.Up);

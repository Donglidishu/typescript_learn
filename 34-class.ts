class Person {
  age: number;
  gender: string;

  constructor(age: number, gender: string) {
    this.age = age;
    this.gender = gender;
  }
}

const p2 = new Person(20, 'xzk');

console.log(p2.age);

//实例化
class Point {
  x = 1;
  y = 2;

  scale(n: number) {
    this.x *= n;
    this.y *= n;
  }
}

const pp = new Point();
pp.scale(5);
console.log(pp.x, pp.y);

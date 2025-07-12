//1.使用之前提到的extends
class Animal {
  move() {
    console.log('走两步');
  }
}

class Dog extends Animal {
  name = '二哈';

  bark() {
    console.log('汪汪!');
  }
}

const d = new Dog();
d.move();
d.bark();
console.log(d.name);

//2.使用implements实现接口
interface Singable {
  sing(): void;
}
class Person3 implements Singable {
  sing() {
    console.log('1243');
  }
}

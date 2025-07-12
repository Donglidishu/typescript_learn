class Point2 {
  x: number = 1;
  y: number = 1;
}
class Point3 {
  x: number = 1;
  y: number = 1;
}

//对象之间的类型兼容性
const ppp: Point2 = new Point3();

class Point4 {
  x: number = 1;
  y: number = 1;
  z: number = 1;
}
const ppppp: Point2 = new Point4();

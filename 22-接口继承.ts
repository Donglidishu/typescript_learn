interface Point2D {
  x: number;
  y: number;
}

// interface Point3D {
//   x: number;
//   y: number;
//   z: number;
// }

//更好的写法：继承
interface Point3D extends Point2D {
  z: number;
}

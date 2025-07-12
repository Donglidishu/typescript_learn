//js写法也可以用
console.log(typeof 'string');

let p = { x: 1, y: 2 };
function formatPoint(point: typeof p) {}
formatPoint({ x: 1, y: 100 });

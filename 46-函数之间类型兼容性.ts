type F1 = (a: number) => void;
type F2 = (a: number, b: number) => void;
let f1: F1 = (a) => {}; //给他一个空函数，不然下面会报错，因为f1此时是undefined
let f2: F2 = f1;

type F7 = () => { name: string };
type F8 = () => { name: string; age: number };

let f7: F7;
let f8: F8;

// f7 = f8;

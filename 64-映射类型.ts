type PropKeys = 'x' | 'y' | 'z';
type Type1 = { x: number; y: number; z: number };
type Type2 = { [Key in PropKeys]: number };

//还可以根据对象类型来创建
type Props = { a: number; b: string; c: boolean };
type Type4 = { [key in keyof Props]: number };

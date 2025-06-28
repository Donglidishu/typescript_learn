# 函数定义（声明）方式
## 1. 函数声明
---
### 语法：
```ts
function 函数名(参数1: 类型, 参数2: 类型, …): 返回值类型 {
  // 函数体
}
```

### 特点：
* 整体被提升（hoisting），可在声明前调用
* 必须有名字，便于调试和递归

```ts
// 举例
function add(a: number, b: number): number {
  return a + b;
}

// 在声明前也能调用
console.log(add(1, 2)); // 3
```

## 2. 函数表达式
---
### 语法
```ts
const 函数名 = function(参数1: 类型, …): 返回值类型 {
  // 函数体
};
```

### 特点
* 变量声明遵循 `let/const` 规则，不会被提升
* 函数名可以省略（匿名函数）或者自定义（具名表达式）

```ts
// 匿名函数表达式
const multiply = function(x: number, y: number): number {
  return x * y;
};

// 具名函数表达式（调试时堆栈里能看到 bar）
const divide = function bar(x: number, y: number): number {
  return x / y;
};
```

## 3. 箭头函数
---
### 语法：
```ts
const 函数名 = (参数1: 类型, …): 返回值类型 => {
  // 函数体
};
// 或者简写（只有一个表达式时可省略大括号和 return）
const fn = (x: number) => x * 2;
```

### 特点
* 不会创建自己的this，继承自外层作用域
* 语法更简洁，适合回调和小函数

```ts
// 带类型注解
const greet = (name: string): void => {
  console.log(`Hello, ${name}`);
};

// 简写形式
const square = (n: number) => n * n;
```

---

# 对象类型

---
## 基本写法
![[Pasted image 20250629011545.png]]

```ts
1.直接使用{}来描述对象结构。属性采用属性名:类型的形式; 方法采用方法名():返回值类型的形式

2.如果方法有参数，就在方法名后面的小括号中指定参数类型(比如: greet()name:string: void)

3.在一行代码中指定对象的多个属性类型时, 使用;来分割

	如果一行代码只指定一个属性类型(通过换行来分隔多个属性类型), 可以去掉 ; (分号)

	方法的类型也可以使用箭头函数形式(比如: {sayHi:() => void} )
```

![[Pasted image 20250629011921.png]]


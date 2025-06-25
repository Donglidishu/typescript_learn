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
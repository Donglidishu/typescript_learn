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
![](Pasted%20image%2020250629011545.png)

```ts
1.直接使用{}来描述对象结构。属性采用属性名:类型的形式; 方法采用方法名():返回值类型的形式

2.如果方法有参数，就在方法名后面的小括号中指定参数类型(比如: greet()name:string: void)

3.在一行代码中指定对象的多个属性类型时, 使用;来分割

	如果一行代码只指定一个属性类型(通过换行来分隔多个属性类型), 可以去掉 ; (分号)

	方法的类型也可以使用箭头函数形式(比如: {sayHi:() => void} )
```


![](Pasted%20image%2020250629011921.png)

## 可选属性
*可选属性的语法与函数可选参数的语法一样，都使用 `?` 来表示* 

![](Pasted%20image%2020250708012243.png)

---
# 接口
当一个对象类型被多次使用时，一般会使用接口（interface）来描述对象的类型，达到复用的目的
解释：
1. 使用 *interface* 关键字来声明接口
2. 接口名称（比如此处的IPerson）可以是任意合法的变量名称
3. 声明接口后，直接使用接口名称作为变量的类型
4. 每行只有一个属性类型，因此属性类型后没有分号

## 接口和类型别名的对比
相同点： 都可以给对象指定类型
不同点：
1. 接口只能为对象指定类型
2. 类型别名不仅可以为对象指定类型，实际上可以为任意类型指定别名

![](Pasted%20image%2020250708013424.png)

## 接口继承
![](Pasted%20image%2020250708013615.png)

---
# 元组
![](Pasted%20image%2020250708013921.png)

---
# 类型推断

*知道有这个机制就行了，写代码的时候还是带上类型*

![](Pasted%20image%2020250708014123.png)

---
# 类型断言
![](Pasted%20image%2020250708014549.png)
![](Pasted%20image%2020250708014836.png)

---
# 字面量类型
![](Pasted%20image%2020250708120444.png)

![](Pasted%20image%2020250708120829.png)

---
# 枚举类型
![](Pasted%20image%2020250708121152.png)
## 枚举成员的值以及数字枚举
![](Pasted%20image%2020250708144626.png)
## 字符串枚举
![](Pasted%20image%2020250708144740.png)
## 枚举的特点和原理
![](Pasted%20image%2020250708144846.png)
# any类型（不推荐）
![](Pasted%20image%2020250708150647.png)

# ts中的typeof运算符
![](Pasted%20image%2020250708151257.png)
# ts高级类型
## 概述
![](Pasted%20image%2020250708151724.png)
## class基本使用
![](Pasted%20image%2020250708152447.png)
![](Pasted%20image%2020250708152458.png)
## 构造函数
![](Pasted%20image%2020250708152720.png)

## 实例方法
![](Pasted%20image%2020250708160407.png)
## 继承
![](Pasted%20image%2020250708160628.png)
![](Pasted%20image%2020250708160838.png)
## 可见性修饰符
**ts中默认权限是public而不是c++中的privat** 
![](Pasted%20image%2020250708161154.png)
![](Pasted%20image%2020250708161306.png)
## readonly只读修饰符
**只要是readonly修饰的属性，必须手动提供明确的类型**
![](Pasted%20image%2020250708162543.png)
# 类型兼容性
## 说明
![](Pasted%20image%2020250708163027.png)
 ![](Pasted%20image%2020250708164656.png)
## 对象之间的类型兼容性
 ![](Pasted%20image%2020250708165712.png)
## 接口之间的类型兼容性
![](Pasted%20image%2020250708165805.png)

## 函数之间的类型兼容性
![](Pasted%20image%2020250708165854.png)

![](Pasted%20image%2020250709000246.png)

![](Pasted%20image%2020250709000315.png)

![](Pasted%20image%2020250709001713.png)
![](Pasted%20image%2020250709001850.png)

# 交叉类型
![](Pasted%20image%2020250709002217.png)

## 交叉类型和接口继承的对比
![](Pasted%20image%2020250709002512.png)

# 泛型
![](Pasted%20image%2020250709004434.png)
![](Pasted%20image%2020250709004448.png)
![](Pasted%20image%2020250709005118.png)
## 简化泛型函数调用
![](Pasted%20image%2020250709005343.png)
## 泛型约束
![](Pasted%20image%2020250709005744.png)

![](Pasted%20image%2020250709005856.png)

## 多个泛型变量的情况
![](Pasted%20image%2020250709011827.png)
## 泛型接口
![](Pasted%20image%2020250709112743.png)
## 数组是泛型接口
![](Pasted%20image%2020250709115947.png)
## 泛型类
![](Pasted%20image%2020250711003617.png)
![](Pasted%20image%2020250711003732.png)
## 泛型工具类型
![](Pasted%20image%2020250711005011.png)
![](Pasted%20image%2020250711005021.png)
![](Pasted%20image%2020250711005049.png)
![](Pasted%20image%2020250711005115.png)
![](Pasted%20image%2020250711005307.png)
## 索引签名类型
![](Pasted%20image%2020250711005405.png)
![](Pasted%20image%2020250711010056.png)
## 映射类型
![](Pasted%20image%2020250711011241.png)
![](Pasted%20image%2020250711014429.png)
![](Pasted%20image%2020250711014712.png)
![](Pasted%20image%2020250711014837.png)
![](Pasted%20image%2020250711014919.png)
# 类型声明文件
## 概述
![](Pasted%20image%2020250712143923.png)
## 两种文件类型
![](Pasted%20image%2020250712143943.png)
## 使用已有的类型声明文件
![](Pasted%20image%2020250712144110.png)
![](Pasted%20image%2020250712144118.png)
![](Pasted%20image%2020250712145815.png)
![](Pasted%20image%2020250712150015.png)
## 创建自己的类型声明文件
![](Pasted%20image%2020250712150419.png)
![](Pasted%20image%2020250712150721.png)
![](Pasted%20image%2020250712151100.png)
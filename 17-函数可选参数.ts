//可选参数：在可选可不选的参数后面加上?
//注意可选参数只能出现在参数列表的最后，也就是说参数后面不能再出现必选参数
function mySlice(start?: number, end?: number): void {
  console.log('起始索引', start, '结束索引', end);
}
mySlice();
mySlice(1);
mySlice(2, 3);

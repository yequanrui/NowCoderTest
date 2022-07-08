/**
 * 题目：HJ70. 矩阵乘法计算量估算
 * 来源：https://www.nowcoder.com/practice/15e41630514445719a942e004edc0a5b?tpId=37
 * 难度：中等
 * 知识点：字符串、栈
 */

// 测试代码

function func(line) {
  // 创建二维数组保存输入矩阵
  const arr = [];
  for (let i = 0; i < line; i++) {
    arr[i] = readline().trim().split(' ').map(Number);
  }
  // 获取计算法则
  const method = readline();
  // result模拟栈结构，保存待计算的数据
  let result = [];
  let count = 0;
  // 遍历计算法则字符串
  for (let i = 0; i < method.length; i++) {
    if (method[i] === '(') {
      // 遇到前括号不做处理
    } else if (method[i] === ')') {
      // 当遇到后括号的时候，出栈计算并将结果重新入栈
      if (result.length >= 2) {
        const second = result.pop();
        const first = result.pop();
        count += first[0] * first[1] * second[1];
        result.push([first[0], second[1]]);
      }
    } else {
      // 遇到非括号，进行入栈操作
      // 通过字母的ascii值判断对应矩阵的顺序
      result.push(arr[method.charCodeAt(i) - 65]);
    }
  }
  print(count);
}
let line;
while ((line = readline())) {
  func(line);
}

// 测试用例

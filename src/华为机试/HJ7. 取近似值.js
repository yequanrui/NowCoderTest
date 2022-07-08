/**
 * 题目：HJ7. 取近似值
 * 来源：https://www.nowcoder.com/practice/3ab09737afb645cc82c35d56a5ce802a?tpId=37
 * 难度：入门
 * 知识点：基础数学、语法题
 */

// 测试代码

function func(line) {
  // 使用parseFloat判断是否浮点数，再使用round取整
  !isNaN(parseFloat(line)) && print(Math.round(line));
}
let line;
while ((line = readline())) {
  func(line);
}

// 测试用例

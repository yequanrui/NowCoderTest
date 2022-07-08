/**
 * 题目：HJ1. 字符串最后一个单词的长度
 * 来源：https://www.nowcoder.com/practice/8c949ea5f36f422594b306a2300315da?tpId=37
 * 难度：简单
 * 知识点：字符串
 */

// 测试代码

function func(line) {
  // 使用lastIndexOf取最后一个空格的序号，用总长度减去该序号再减1即是最后一项的长度
  print(line.length - 1 - line.lastIndexOf(' '));
}
let line;
while ((line = readline())) {
  func(line);
}

// 测试用例

/**
 * 题目：HJ3. 明明的随机数
 * 来源：https://www.nowcoder.com/practice/3245215fffb84b7b81285493eae92ff0?tpId=37
 * 难度：较难
 * 知识点：数组
 */

// 测试代码

const res = [];
function func(line) {
  res.push(line);
  // 如果除首位后的数组长度等于首位的值，进入计算
  if (res.length - 1 === Number(res[0])) {
    // 去掉首位
    res.shift();
    // 利用Set去重，从小到大排序并打印
    Array.from(new Set(res))
      .sort((a, b) => a - b)
      .map((e) => print(e));
  }
}
let line;
while ((line = readline())) {
  func(line);
}

// 测试用例

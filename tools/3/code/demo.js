// 跟牛客的一样，读取数据用的是readline()，读进来的是字符串，输出用的是print()

/**
 * 示例：HJ14 字符串排序
 * 输入：9
cap
to
cat
card
two
too
up
boat
boot
 * 输出：boat
boot
cap
card
cat
to
too
two
up
 */

function func() {
  const n = readline();
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(readline());
  }
  arr.sort().map(print);
}
while ((line = readline())) {
  func(line);
}

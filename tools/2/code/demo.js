// 跟牛客的一样，读取数据用的是readline()，读进来的是字符串，输出用的是print()

function func(line) {
  const [a, b] = line.split(" ").map(Number);
  print(a + b);
}
let line;
while ((line = readline())) {
  func(line);
}

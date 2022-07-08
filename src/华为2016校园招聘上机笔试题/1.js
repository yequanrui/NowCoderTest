function func(line) {
  const [n, m] = line.split(' ').map(Number);
  const s = readline().split(' ').map(Number);
  const scores = [];
  // 给每个学生初始化原始分数
  for (let i = 0; i < n; i++) {
    scores[i] = s[i];
  }
  for (let i = 0; i < m; i++) {
    const [c, a, b] = readline().split(' ');
    if (c === 'Q') {
      // a和b要先判断大小，再从原始分数数组里截取，最后再打印最大值
      const [min, max] = [a, b].map(Number).sort((x, y) => x - y);
      const temp = scores.slice(min - 1, max);
      print(Math.max(...temp));
    } else if (c === 'U') {
      // 更新操作直接赋值即可
      scores[Number(a) - 1] = Number(b);
    }
  }
}
let line;
while ((line = readline())) {
  func(line);
}

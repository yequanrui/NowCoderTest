const res = {};
function func(line) {
  const [name, num] = line.split(' ');
  // 长度超过16个字符，则只输出后16个字符
  const str = name.substr(name.lastIndexOf('\\') + 1).substr(-16);
  res[`${str} ${num}`] = (res[`${str} ${num}`] || 0) + 1;
}
let line;
while ((line = readline())) {
  func(line);
}
Object.keys(res)
  // 从多到少排序
  .sort((a, b) => res[b] - res[a])
  // 只输出前8条记录
  .slice(0, 8)
  .forEach((e) => {
    print(`${e} ${res[e]}`);
  });

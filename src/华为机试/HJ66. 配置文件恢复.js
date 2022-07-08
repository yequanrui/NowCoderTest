/**
 * 题目：HJ66. 配置文件恢复
 * 来源：https://www.nowcoder.com/practice/ca6ac6ef9538419abf6f883f7d6f6ee5?tpId=37
 * 难度：中等
 * 知识点：字符串
 */

// 测试代码

function func(line) {
  const map = {
    'reset board': 'board fault',
    'board add': 'where to add',
    'board delete': 'no board at all',
    'reboot backplane': 'impossible',
    'backplane abort': 'install first',
    'he he': 'unknown command',
  };
  const arr = line.split(' ');
  let cmd = 'unknown command';
  if (arr.length === 1) {
    'reset'.startsWith(arr[0]) && (cmd = 'reset what');
  } else if (arr.length === 2) {
    const cmds = [];
    for (let key in map) {
      const keys = key.split(' ');
      if (keys[0].startsWith(arr[0]) && keys[1].startsWith(arr[1])) {
        cmds.push(map[key]);
      }
    }
    // 唯一确定命令才赋值
    cmds.length === 1 && (cmd = cmds[0]);
  }
  print(cmd);
}
let line;
while ((line = readline())) {
  func(line);
}

// 测试用例

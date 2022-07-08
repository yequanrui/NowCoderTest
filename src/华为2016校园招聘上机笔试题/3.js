function func(line) {
  // 不管谁有王炸，肯定是王炸最大
  if (line.includes('joker JOKER')) {
    print('joker JOKER');
  } else {
    // 先拆分两手牌，再分别拆单牌
    const [p1, p2] = line.split('-');
    const l1 = p1.split(' ');
    const l2 = p2.split(' ');
    // 谁有炸弹且另一个没有，那谁就最大
    if (l1.length === 4 && l2.length !== 4) {
      print(p1);
    } else if (l2.length === 4 && l1.length !== 4) {
      print(p2);
    }
    // 牌数相同时比较首牌大小
    else if (l1.length === l2.length) {
      // 通过序号判断牌面大小
      function count(str) {
        return '345678910JQKA2jokerJOKER'.indexOf(str);
      }
      print(count(l1[0]) > count(l2[0]) ? p1 : p2);
    } else {
      // 剩下的就都是异常
      print('ERROR');
    }
  }
}
let line;
while ((line = readline())) {
  func(line);
}

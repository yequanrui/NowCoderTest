/**
 * 题目：HJ28. 素数伴侣
 * 来源：https://www.nowcoder.com/practice/b9eae162e02f4f928eac37d7699b352e?tpId=37
 * 难度：困难
 * 知识点：查找、排序
 */

// 测试代码

const res = [];
function func(line) {
  res.push(line);
  // 长度为2时进入计算
  if (res.length === 2) {
    // 素数：只能被1和自身整除的数
    function isPrime(n) {
      if (n >= 2) {
        for (let i = 2; i < Math.ceil(n / 2); i++) {
          if (n % i === 0) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }
    // 匈牙利算法：先配对的先得，后配对的能让就让，让不了时就是最大配对数
    function find(oddNum, evenArr, used, matchArr) {
      for (let i = 0; i < evenArr.length; i++) {
        // 循环每个偶数与传入的奇数配对
        if (isPrime(oddNum + evenArr[i]) && used[i] == 0) {
          // 如果当前偶数与传入的奇数匹配，并且当前偶数位还没有匹配过奇数
          used[i] = 1;
          // 如果第i个偶数没有伴侣
          // 或者第i个偶数原来有伴侣，并且该伴侣能够重新找到伴侣的话(这里有递归调用)
          // 则奇数x可以设置为第i个偶数的伴侣
          // 这里采用了匈牙利算法，能让则让
          if (matchArr[i] == 0 || find(matchArr[i], evenArr, used, matchArr)) {
            matchArr[i] = oddNum;
            return true;
          }
        }
      }
      //遍历完偶数都没有可以与传入奇数做伴侣的，该奇数只能孤独终老了
      return false;
    }
    // 传入每一轮输入的偶数和奇数序列
    function getRes(oddArr, evenArr) {
      // 构造matchArr用于存放和偶数序列能配对的奇数的值，不是下标
      const matchArr = new Array(evenArr.length).fill(0);
      // count存放能配对的奇数个数
      let count = 0;
      // 循环奇数
      for (let i = 0; i < oddArr.length; i++) {
        // 构造used存放能偶数是否已经配对，记录已经配对的下标，重点是每次奇数遍历需重置，递归时不重置
        // 可以理解对每个新传去的奇数来说，所有偶数都是潜在对象，当对递归的原配奇数来讲，不能再去配对已经配对的偶数
        const used = new Array(evenArr.length).fill(0);
        find(oddArr[i], evenArr, used, matchArr) && count++;
      }
      print(count);
    }
    // 利用split分割成数组，slice再次分割，保证数组长度和前面输入的长度一致
    const arr = res[1].split(' ').slice(0, Number(res[0])).map(Number);
    // 素数中除了2都是奇数，且此处不可能为2，所以输入的两个正整数只能是一奇一偶，先分离奇偶
    const [oddArr, evenArr] = [[], []];
    arr.forEach((item) => {
      item % 2 !== 0 ? oddArr.push(item) : evenArr.push(item);
    });
    // 将每一轮的奇偶数组传出
    getRes(oddArr, evenArr);
  }
}
let line;
while ((line = readline())) {
  func(line);
}

// 测试用例

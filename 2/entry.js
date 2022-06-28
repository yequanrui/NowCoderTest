// 加载js文件
const excute = function () {
  const script = document.createElement("script");
  script.src = "./code/demo.js";
  document.body.appendChild(script);
};

// 读取一行数据
const readline = function () {
  const data = `\n${document.getElementById("data").value}\n`;
  readline.count = ++readline.count || 1;
  let line = [];
  let nNum = 0;
  for (let i = 1, vlen = data.length; i < vlen; i++) {
    data[i] === "\n" && (nNum += 1);
    if (nNum === readline.count) {
      for (let ii = i - 1; data[ii] != "\n"; ii--) {
        line.push(data[ii]);
      }
      line = line.reverse();
      return line.join(""); //返回的是字符串类型
    }
  }
};

// 重测数据
const repeat = function () {
  readline.count = undefined;
  document.getElementById("result").innerHTML = "";
};

// 更新页面 清空输入框
const update = function () {
  window.location = "./index.html";
};

// 输出函数
const print = function (data) {
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").innerHTML = data;
};

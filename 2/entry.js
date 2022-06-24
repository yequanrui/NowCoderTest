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
      // for (let ii = 0; ii < line.length; ii++) {
      //   if (line[ii] === " " || line[ii] === ",") {
      //     line.splice(ii, 1);
      //   }
      // }
      return line.join(""); //返回的是字符串类型
      // break;
    }
  }
};

// 重测数据
const repeat = function () {
  // const con = document.getElementById("data").value;
  // window.location = "./entry.html";
  // document.getElementById('data').innerHTML = con;
  // $("#data").val(con);
  readline.count = undefined;
  document.getElementById("result").innerHTML = "";
};

// 更新页面 清空输入框
const update = function () {
  window.location = "./entry.html";
};

// 输出函数
const print = function (data) {
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").innerHTML = data;
};

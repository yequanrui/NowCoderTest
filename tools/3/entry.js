// 加载js文件
const excute = function () {
  if (document.getElementById("demoScript")) {
    const item = document.getElementById("demoScript");
    item.parentNode.removeChild(item);
  }
  repeat();
  const script = document.createElement("script");
  script.src = "./code/demo.js";
  script.id = "demoScript";
  document.body.appendChild(script);
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

// 读取一行数据
const readline = function () {
  const data = document.getElementById("data").value.split("\n");
  readline.count = ++readline.count || 1;
  return data[readline.count - 1];
};

// 输出函数
const print = function (data) {
  document.getElementById("result").innerHTML += `${data}\n`;
};

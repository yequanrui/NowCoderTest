/*加载js文件*/
var excute = function(){
    if(document.getElementById("demoScript")){
        let item = document.getElementById("demoScript")
        item.parentNode.removeChild(item)
    }
    repeat()
    let script = document.createElement("script")
    script.src = "./code/demo.js"
    script.id = "demoScript"
    document.body.appendChild(script)
}
/*重测数据*/
var repeat = function(){
    readline.count = undefined;
    document.getElementById('result').innerHTML = '';
}
/*更新页面 清空输入框*/
var update = function () {
        window.location = './entry.html';
}
/*读取一行数据*/
var readline = function () {
    let data = document.getElementById('data').value.split('\n')
    readline.count = ++readline.count || 1;
    return data[readline.count-1]
}
/*输出函数*/
var print = function (data) {
    // console.log(data)
    // document.getElementById('result').innerHTML = '';
    document.getElementById('result').innerHTML += `${data}\n`;
}
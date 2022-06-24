
/*
*读取数据用readline(),读进来的是字符串
*输出数据用print()
*/

// var num1 = readline();	//读第一行
// var num2 = readline();	//读第二行
// print(parseInt(num1)+parseInt(num2));	//输出

/**
 * 示例
 * HJ14 字符串排序
*/
/* 
输入：
9
cap
to
cat
card
two
too
up
boat
boot
*/

function fun() {
    let index = readline()
    let arr = []
    for(let i = 0; i < index; i++) {
        arr.push(readline())
    }
    arr.sort().forEach(item => print(item))
}
fun()
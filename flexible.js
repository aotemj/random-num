/*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
var html = document.getElementsByTagName('html')[0];
// console.log(html);
/*取到屏幕的宽度*/

var width = window.innerWidth;
var height = window.innerHeight;
// console.log(width);
/* 640 100  320 50 */
var fontSize = 100 / 1200 * width;
console.log(fontSize);
/*设置fontsize*/

html.style.fontSize = fontSize + 'px';
html.style.height=height+'px';
window.onresize = function() {
    var html = document.getElementsByTagName('html')[0];
    // console.log(html);
    /*取到屏幕的宽度*/
    var width = window.innerWidth;
    var height = window.innerHeight;
    // console.log(width);
    /* 640 100  320 50 */
    var fontSize = 100 / 1200 * width;
    console.log(fontSize);
    /*设置fontsize*/
    html.style.fontSize = fontSize + 'px';
    html.style.height=height+'px';
}

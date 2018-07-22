
var int;
var speed = 80;

var allArray = ["01", "02", "03", "05", "06", "07", "08", "09", "10", "11", "12", "13", "15", "16", "17", "18", "19", "20", "21", "22", "23", "25", "26", "27", "28", "29", "30", "31", "32", "33", "35", "36", "37", "38", "39", "51", "52", "55", "56", "57", "58", "59", "60", "61", "62", "63", "65", "66", "67", "68", "69", "70", "71"]

var map = {1:"53"};

var randomArray = getRandomArray(allArray);
var yxArray = [];

function getRandomArray(array) {
    var randomArray = [];

    while (array.length > 0) {
        var num = Math.floor(Math.random()*(array.length+1));
        if(array[num]){
            randomArray.push(array[num]);
            array.splice(num,1);
        }
    }
    
    for(var k in map){
        randomArray.splice(k-1,0,map[k]);
    }

    return randomArray;
}

function random() {
    document.getElementById("div_random").innerHTML = Math.floor(Math.random()*(72));
}
function Start() {
    int = setInterval(random, speed);
    document.getElementById("btn_start").style.display = "none";
    document.getElementById("btn_stop").style.display = "";
}
function Stop() {
    clearInterval(int);
    if(randomArray.length==0){
        document.getElementById("btn_start").disabled=true;
        document.getElementById("btn_stop").disabled=true;
        document.getElementById("div_random").innerHTML="选号结束";
        return;
    }
    document.getElementById("btn_start").style.display = "";
    document.getElementById("btn_stop").style.display = "none";
    var yx = randomArray.shift();
    yxArray.push(yx);
    document.getElementById("div_random").innerHTML = yx;
    console.log(yxArray);
    var span = document.createElement('div');
    span.innerText=yxArray[yxArray.length-1];
    var innerBox = document.querySelector('.inner-box');
    innerBox.appendChild(span);
    // console.log(str0);

}



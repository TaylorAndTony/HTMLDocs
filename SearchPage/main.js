// return time like 20:34
function getDate() {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    return `${hour}:${minute}`
}
// callback function to set the clock
function setClock(){
    document.getElementById("clock").innerHTML = getDate();
}
// animated function to show the clock
function showClock(){
    document.getElementById("clock").style.opacity = 1;
}
function showInput(){
    document.getElementById("search").style.opacity = 1;
}
// main
window.onload = function(){
    setClock();
    setInterval(setClock, 1000);
    // setClock();
    // 0.1s 后展示时钟，动画1s
    setTimeout(showClock, 100);
    setTimeout(showInput, 500);
}
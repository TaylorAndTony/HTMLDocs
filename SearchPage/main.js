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
//when you click the search button
function search(){
    var text = document.getElementById("input").value;
    // https://www.baidu.com/s?ie=utf-8&wd=js%E8%B7%B3%E8%BD%AC
    var url = `https://www.baidu.com/s?ie=utf-8&wd=${text}`;
    window.location.href = url;
}
// main
window.onload = function(){
    
    setClock();
    setInterval(setClock, 3000);
    // setClock();
    setTimeout(showClock, 100);
    setTimeout(showInput, 500);
}
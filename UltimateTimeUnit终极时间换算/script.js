const nian = document.querySelector("#res-nian");
const zhou = document.querySelector("#res-zhou");
const tian = document.querySelector("#res-tian");
const shi = document.querySelector("#res-shi");
const fen = document.querySelector("#res-fen");
const miao = document.querySelector("#res-miao");

const nian2 = document.querySelector("#res-nian-2");
const zhou2 = document.querySelector("#res-zhou-2");
const tian2 = document.querySelector("#res-tian-2");
const shi2 = document.querySelector("#res-shi-2");
const fen2 = document.querySelector("#res-fen-2");
const miao2 = document.querySelector("#res-miao-2");

const shichen = document.querySelector("#res-shichen");
const geng = document.querySelector("#res-geng");
const ke = document.querySelector("#res-ke");
const tea = document.querySelector("#res-tea");
const xiang = document.querySelector("#res-xiang");
const zhi = document.querySelector("#res-zhi");
const cha = document.querySelector("#res-cha");
const yue = document.querySelector("#res-yue");
const jidu = document.querySelector("#res-jidu");

const expr = document.querySelector('#exp');

// 
// add or change the unit calculations here!
// 
// [regex for unit keyword, value for this unit in secs]
// 
const units = [
    [/cen/gm, 31536000 * 100],
    [/yr/gm, 31536000],
    [/w/gm, 604800],
    [/d/gm, 86400],
    [/h/gm, 3600],
    [/m/gm, 60],
    [/s/gm, 1],
    [/sc/gm, 3600 * 2],
    [/g/gm, 3600 * 2.4],
    [/ke/gm, 60 * 15],
]

function evalTimeExpr() {
    let e = expr.value;
    // all calc are done in seconds
    let totalSec = 0;
    let tempStr = e.slice(0);
    for (let i of units) {
        tempStr = tempStr.replace(i[0], '*' + i[1]);
    }
    console.log('parsing: ' + tempStr);
    try {
        totalSec = eval(tempStr);
        console.log('total sec: ' + totalSec);
    } catch (err) {
        console.log('error: ' + err);
        totalSec = 0;
    }
    return totalSec;
}

function updateResult(totalSec) {
    if (!totalSec) {
        return;
    }
    let v_nian = Math.floor(totalSec / 31536000);
    let v_zhou = Math.floor((totalSec % 31536000) / 604800);
    let v_tian = Math.floor((totalSec % 604800) / 86400);
    let v_shi = Math.floor((totalSec % 86400) / 3600);
    let v_fen = Math.floor((totalSec % 3600) / 60);
    let v_miao = Math.floor((totalSec % 60));
    nian.innerHTML = v_nian;
    zhou.innerHTML = v_zhou;
    tian.innerHTML = v_tian;
    shi.innerHTML = v_shi;
    fen.innerHTML = v_fen;
    miao.innerHTML = v_miao;
}

function update() {
    let secs = evalTimeExpr();
    updateResult(secs);
    let digits = 3;
    nian2.innerHTML = (secs / 31536000).toFixed(digits);
    zhou2.innerHTML = (secs / 604800).toFixed(digits);
    tian2.innerHTML = (secs / 86400).toFixed(digits);
    shi2.innerHTML = (secs / 3600).toFixed(digits);
    fen2.innerHTML = (secs / 60).toFixed(digits);
    miao2.innerHTML = secs.toFixed(digits);

    shichen.innerHTML = (secs / 60 / 60 / 2).toFixed(digits);
    geng.innerHTML = (secs / 60 / 60 / 2.4).toFixed(digits);
    ke.innerHTML = (secs / 60 / 15).toFixed(digits);
    tea.innerHTML = (secs / 60 / 10).toFixed(digits);
    xiang.innerHTML = (secs / 60 / 5).toFixed(digits);
    zhi.innerHTML = (secs / 10).toFixed(digits);
    cha.innerHTML = (secs).toFixed(digits);
    yue.innerHTML = (secs / 60 / 60 / 24 / 30).toFixed(digits);
    jidu.innerHTML = (secs / 60 / 60 / 24 / 30 / 3).toFixed(digits);
}

window.onload = function () {
    expr.addEventListener('keyup', function (e) {
        update();
    })
}
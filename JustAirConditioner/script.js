let id_ = 0;

/**
 * create a unique ID
 * @returns {number} an increased id
 */
function nextId() {
    id_++;
    if (id_ >= 10000) {
        id_ = 0;
    }
    return id_;
}


function rand(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function addOneDrop() {
    let thisId = nextId();
    let s = rand(20, 40);
    // generate a snow
    $(`
    <div id="${thisId}" class="drop-me" style="left: ${rand(1, 300)}px; width: ${s}px; height: ${s}[x">
        <img src="snow.png" alt="Avatar" style="width:100%">
    </div>
    `).appendTo('#drop');
    // then remove it
    setTimeout(function () {
        $(`#${thisId}`).remove();
    }, 5000);
}

// =========================================
//          Buttons
// =========================================

function add() {
    let now = parseInt($("#ac-temp-digit").text()) + 2;
    if (now >= 28) {
        return;
    }
    $("#ac-temp-digit").text(now);
}

function desc() {
    let now = parseInt($("#ac-temp-digit").text()) - 2;
    if (now < 14) {
        return;
    }
    $("#ac-temp-digit").text(now);
}

function hookButtons() {
    // hide temp
    $('#drop').css('display', 'none');
    $('#ac-temp').css('display', 'none');
    // enable other buttons
    $('#btn-add').click(add);
    $('#btn-desc').click(desc);
    $('#btn-power').click(function () {
        let area = $('#ac-temp');
        let drop = $('#drop');
        if (area.css('display') === 'none') {
            area.css('display', 'block');
            drop.css('display', 'block');
        } else {
            area.css('display', 'none');
            drop.css('display', 'none');
        }
    })
}

window.onload = function () {
    hookButtons();
    setInterval(addOneDrop, 1000);
}
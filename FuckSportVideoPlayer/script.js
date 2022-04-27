let clicked = true;

document.addEventListener('DOMContentLoaded', () => {
    let vid = document.getElementById('video');
    vid.volume = 0;
    vid.loop = true;
    vid.play();

    document.getElementById('slider').oninput = function() {
        document.getElementById('video').playbackRate = this.value;
        document.getElementById('spd-value').innerText = this.value;
    }

    vid.addEventListener('click', function(e) {
        if (clicked) {
            vid.style.width = '90%';
        } else {
            vid.style.width = '50%';
        }
        clicked = !clicked;
    })
})
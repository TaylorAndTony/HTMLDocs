let clicked = true;

document.addEventListener('DOMContentLoaded', () => {
    // auto play video
    let vid = document.getElementById('video');
    vid.volume = 0;
    vid.loop = true;
    vid.play();
    // video response click
    vid.addEventListener('click', () => {
        if (clicked) {
            vid.pause();
            clicked = false;
        } else {
            vid.play();
            clicked = true;
        }
    })
    // speed slider
    document.getElementById('slider').oninput = function() {
        document.getElementById('video').playbackRate = this.value;
        document.getElementById('spd-value').innerText = this.value;
    }
    // height slider
    document.getElementById('height').oninput = function() {
        document.getElementById('height-value').innerText = this.value;
        document.getElementById('video').style.height = `${this.value}px`;
    }
    // toggle show hide
    document.getElementById('show-hide').addEventListener('click', () => {
        console.log('1');
        let cont = document.getElementById('control-area');
        if (cont.style.display === 'none') {
            cont.style.display = 'block';
        } else {
            cont.style.display = 'none';
        }
    })
})
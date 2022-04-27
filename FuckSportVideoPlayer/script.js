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
    document.getElementById('height').oninput = function() {
        document.getElementById('height-value').innerText = this.value;
        document.getElementById('video').style.height = `${this.value}px`;
    }

})
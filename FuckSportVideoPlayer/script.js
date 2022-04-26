document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('video').volume = 0;
    document.getElementById('video').loop = true;
    document.getElementById('video').play();

    document.getElementById('slider').oninput = function() {
        document.getElementById('video').playbackRate = this.value;
        document.getElementById('spd-value').innerText = this.value;
    }
})
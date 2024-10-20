var loadText = document.querySelector(".loading-text");
var bg = document.querySelector(".bg");
var load = 0;
var int = setInterval(blurring, 30);
function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loadText.innerText = "".concat(load, "%");
    loadText.style.opacity = scale(load, 0, 100, 1, 0).toString();
    bg.style.filter = "blur(".concat(scale(load, 0, 100, 30, 0), "px)");
}
function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

const loadText = document.querySelector(".loading-text") as HTMLElement;
const bg = document.querySelector(".bg") as HTMLElement;

let load: number = 0;
let int = setInterval(blurring, 30);

function blurring(): void {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0).toString();
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
): number {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

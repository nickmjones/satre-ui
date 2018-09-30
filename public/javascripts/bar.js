var bars = document.querySelectorAll('.progress-bar'), i;

function setWidth(length){
  bars[i].style.width = length + '%'
}

for(i = 0; i < bars.length; ++i) {
  setWidth(bars[i].dataset.length);
}

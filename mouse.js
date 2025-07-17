const mouseCanvas = document.querySelector('.mouse-canvas');
// document.body.appendChild(mouseCanvas)
mouseCanvas.height = 500;
mouseCanvas.width = 500;
mouseCanvas.classList.add('mouse-canvas');
const mouseCanvasContext = mouseCanvas.getContext('2d');
// Create gradient
var grd = mouseCanvasContext.createRadialGradient(
  mouseCanvas.width / 2,
  mouseCanvas.height / 2,
  0,
  mouseCanvas.width / 2,
  mouseCanvas.height / 2,
  350
);
grd.addColorStop(0, '#FA4141');
grd.addColorStop(0.25, '#EBF538');
grd.addColorStop(0.5, '#1DFDE3');
grd.addColorStop(0.75, '#B934FC');
grd.addColorStop(1, '#FC4545');

// Fill with gradient
mouseCanvasContext.fillStyle = grd;
mouseCanvasContext.fillRect(0, 0, mouseCanvas.width, mouseCanvas.height);

const cursor = document.createElement('canvas');
const ctx = cursor.getContext('2d');
makeCursor();

document.addEventListener('mouseover', function initialMouseColor(e) {
  setCursorColor(e);
  document.removeEventListener('mouseover', initialMouseColor);
});

document.addEventListener('mousemove', setCursorColor);

function setCursorColor(event) {
  // const x = event.clientX
  console.log(event.clientX, event.clientY);
  console.log('widths', mouseCanvas.clientWidth, mouseCanvas.width);
  const x = (event.clientX / mouseCanvas.clientWidth) * mouseCanvas.width;
  const y = (event.clientY / mouseCanvas.clientHeight) * mouseCanvas.height;
  // console.log(x, y)
  // console.log(mouseCanvasContext.getImageData(x, y, 1, 1).data)
  const [r, g, b, a] = mouseCanvasContext.getImageData(x, y, 1, 1).data;
  // ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
  // ctx.stroke();
  makeCursor(`rgba(${r}, ${g}, ${b}, ${a})`)
  // document.body.style.cursor = 'url(' + cursor.toDataURL() + '), auto';
}

function makeCursor(color) {
  cursor.width = 16;
  cursor.height = 16;

  // draw some shape for sake of demo

  ctx.lineWidth = 3;
  ctx.moveTo(2, 10);
  ctx.lineTo(2, 2);
  ctx.lineTo(10, 2);
  ctx.moveTo(2, 2);
  ctx.lineTo(30, 30);
  ctx.strokeStyle = color;
  ctx.stroke();



  // base_image = new Image();
  // base_image.src = './BlueCursor.cur';
  // base_image.onload = function () {
  //   ctx.drawImage(base_image, 0, 0);
  //   // set composite mode
  //   ctx.globalCompositeOperation = 'source-in';

  //   // draw color
  //   ctx.fillStyle = color;
  //   ctx.fillRect(0, 0, cursor.width, cursor.height);
  //   document.body.style.cursor = 'url(' + cursor.toDataURL() + '), auto';
  // };

  // set image as cursor (modern browsers can take PNGs as cursor).
  document.body.style.cursor = 'url(' + cursor.toDataURL() + '), auto';
}

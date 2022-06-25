const halfInnerWidth = window.innerWidth / 2
const halfInnerHeight = window.innerHeight / 2
const radius = 15
const halfRadius = radius / 2
const playerCenterX = halfInnerWidth - halfRadius
const playerCenterY = halfInnerHeight - halfRadius

export default function drawGameObjects(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.arc(
    playerCenterX,
    playerCenterY,
    radius,
    0,
    2 * Math.PI,
  )
  ctx.fillStyle = 'rgb(20, 20, 20)'
  ctx.lineWidth = 5
  ctx.strokeStyle = 'rgb(200, 200, 200)'
  ctx.fill()
  ctx.stroke()

  // dotsData.map((xArrayOfDots, i) => {
  //   xArrayOfDots.map((dotData, j) => {
  //     ctx.beginPath();
  //     ctx.arc(
  //       dotData.x * PIXEL_POS_MULTIPLIER,
  //       dotData.y * PIXEL_POS_MULTIPLIER,
  //       dotData.radius,
  //       0,
  //       2 * Math.PI
  //     );

  //     ctx.fillStyle = dotData.color;

  //     ctx.fill();
  //   });
  // });
}

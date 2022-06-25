import { DOT_RADIUS_MULTIPLIER, PIXEL_POS_MULTIPLIER, X_MAX } from "./util/constants";
import { dotsData } from "./util/globalStates";

export default function drawDots (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  dotsData.map((xArrayOfDots, i) => {

    xArrayOfDots.map((dotData, j) => {

      ctx.beginPath()
      ctx.arc(
        dotData.x * PIXEL_POS_MULTIPLIER, 
        dotData.y * PIXEL_POS_MULTIPLIER,
        dotData.radius, 
        0,
        2 * Math.PI
      );

      ctx.fillStyle = dotData.color;

      ctx.fill()
    })
  })
}
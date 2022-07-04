import {
  DOT_RADIUS_MULTIPLIER,
  PIXEL_POS_MULTIPLIER,
  X_MAX,
} from "../util/constants";
import { dotsData } from "../util/globalStates";

export default function drawDots(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  frameCount: number
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // when it's time to optimize: http://jsfiddle.net/loktar/63QZz/
  
  // ctx.beginPath();
  for (let i = 0; i < dotsData.length; i++) {
    for (let j = 0; j < dotsData[i].length; j++) {
      ctx.beginPath();
      ctx.arc(
        (dotsData[i][j].x * PIXEL_POS_MULTIPLIER),
        (dotsData[i][j].y * PIXEL_POS_MULTIPLIER),
        dotsData[i][j].radius * DOT_RADIUS_MULTIPLIER,
        0,
        2 * Math.PI
      )
      // const radius = dotsData[i][j].radius * DOT_RADIUS_MULTIPLIER * 2
      // const radiusHalfed = radius / 2
      // ctx.fillRect(
      //   Math.floor(dotsData[i][j].x * PIXEL_POS_MULTIPLIER - radiusHalfed),
      //   Math.floor(dotsData[i][j].y * PIXEL_POS_MULTIPLIER - radiusHalfed),
      //   radius,
      //   radius
      // )
      ctx.fillStyle = dotsData[i][j].color;
      ctx.fill();
    }
  }
  // ctx.fill();
}

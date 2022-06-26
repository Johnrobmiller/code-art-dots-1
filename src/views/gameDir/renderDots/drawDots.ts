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

  // ctx.beginPath();
  for (let i = 0; i < dotsData.length; i++) {
    // framcCount is only an even number
    // if (i % 2 === (frameCount / 2) % 2) continue
    
    for (let j = 0; j < dotsData[i].length; j++) {
      ctx.beginPath();
      ctx.arc(
        Math.floor(dotsData[i][j].x * PIXEL_POS_MULTIPLIER),
        Math.floor(dotsData[i][j].y * PIXEL_POS_MULTIPLIER),
        Math.floor(dotsData[i][j].radius * 0.5 * DOT_RADIUS_MULTIPLIER),
        0,
        2 * Math.PI
      )
      // const radius = Math.floor(dotsData[i][j].radius)
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

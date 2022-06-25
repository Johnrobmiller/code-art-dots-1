import {
  DOT_RADIUS_MULTIPLIER,
  PIXEL_POS_MULTIPLIER,
  X_MAX,
} from "../util/constants";
import { dotsData } from "../util/globalStates";

export default function drawDots(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < dotsData.length; i++) {
    for (let j = 0; j < dotsData[i].length; j++) {
      ctx.beginPath();
      ctx.arc(
        dotsData[i][j].x * PIXEL_POS_MULTIPLIER,
        dotsData[i][j].y * PIXEL_POS_MULTIPLIER,
        dotsData[i][j].radius,
        0,
        2 * Math.PI
      );
    
      ctx.fillStyle = dotsData[i][j].color;
    
      ctx.fill();
    }
  }
}

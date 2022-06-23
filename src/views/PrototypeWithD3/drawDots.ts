import { dotsData } from "./globalStates";

export default function drawDots (ctx: CanvasRenderingContext2D) {
  dotsData.map((xArrayOfDots, i) => {

    xArrayOfDots.map((dotData, j) => {

      ctx.beginPath()
      ctx.arc(
        dotData.x, 
        dotData.y, 
        dotData.radius, 
        0,
        2 * Math.PI
      );
      ctx.fillStyle = dotData.color;
    })
  })
}
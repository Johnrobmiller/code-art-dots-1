import { STARTING_TIME, TEMPO, X_MAX, Y_MAX } from "../util/constants";
import { dotsData, pos } from "../util/globalStates";
import { IDotData } from "../util/types";

const makeA = (
  speed: number, 
  speedMultiplier: number,
  iAndJ: number,
  j: number
) => {
  return Math.sin(
    speed * speedMultiplier + (
      iAndJ - j / 100
    )
  ) + 1
}

export default function calculateDots(timestamp: number) {
  const speed = timestamp / TEMPO + STARTING_TIME;

  for (let i = 0; i < dotsData.length; i++) {
    const relativePosX = X_MAX - Math.abs(i + pos[0]) % X_MAX
    for (let j = 0; j < dotsData[i].length; j++) {
      const relativePosY = Math.abs(j + pos[1]) % Y_MAX
    
      // range between 0 and 1
      const iAndJ = i & j;
    
      const a1 =  makeA(speed, 1, iAndJ, j) / 2
    
      const a10 = makeA(speed, 10, iAndJ, j) / 2.5
    
      const color = `hsl(
        ${(((a1 * 100) & speed) + 180) * (speed / 4)}, 
        ${((a1 / 2 + 0.5) * 100) & speed}%, 
        ${((a1 / 2 + 0.5) * 100) & speed}%)
      `

      dotsData[i][j].x = relativePosX
      dotsData[i][j].y = relativePosY
      dotsData[i][j].radius = a10
      dotsData[i][j].color = color
    }
  }
}

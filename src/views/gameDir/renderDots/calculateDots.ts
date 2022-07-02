import { DOT_RADIUS_MULTIPLIER, STARTING_TIME, X_MAX, Y_MAX } from "../util/constants";
import { dotsData, pos, time } from "../util/globalStates";
import { IDotData } from "../util/types";

// range: [0, 1]
const oscTriA = (
  speed: number, 
  period: number
) => {
  const speedOverPeriod = speed / period;
  const a = ~~(speedOverPeriod + 0.5)
  const b = speedOverPeriod - a
  return 2 * Math.abs(b)
}

export default function calculateDots(timestamp: number) {
  const speed = timestamp * time.tempo + STARTING_TIME;

  for (let i = 0; i < dotsData.length; i++) {
    const relativePosX = X_MAX - Math.abs(i + pos[0]) % X_MAX
    for (let j = 0; j < dotsData[i].length; j++) {
      const relativePosY = Math.abs(j + pos[1]) % Y_MAX
    
      const _a = oscTriA(i & j, ((speed % 100)) & 161.6) / 2 + 0.5 // range: [0, 1]
      
      const hue = _a * 100 + 250 // range: [0, 360]
      const saturation = _a * 100 // range: [0, 100]
      const lightness = _a * 50 // range: [0, 100]
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`

      const radius = _a * 0.8 // range: [0, 1]

      dotsData[i][j].x = relativePosX
      dotsData[i][j].y = relativePosY
      dotsData[i][j].radius = radius
      dotsData[i][j].color = color
    }
  }
}

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

const lerp = (a: number, b: number, alpha: number) => {
  return alpha * a + (1 - alpha) * b
}

export default function calculateDots(timestamp: number) {
  const speed = timestamp * time.tempo + STARTING_TIME;

  for (let i = 0; i < dotsData.length; i++) {
    const relativePosX = (X_MAX - i - pos[0]) % (X_MAX - 2)
    // const relativePosX = X_MAX - i + (speed / 1.5) % (X_MAX - 2)
    for (let j = 0; j < dotsData[i].length; j++) {
      const relativePosY = (j + pos[1]) % (Y_MAX - 1)
      // const relativePosY = (Y_MAX - j + (speed / 1.5)) % (Y_MAX - 1)
      
      const sinI = Math.sin(~~(~~((i+j/1.616034)/2) & ~~(i/2)) )
      const sinJ = Math.sin(~~(~~((j+i/1.616034) / 2) & ~~(j/2)) )
      const mappedSinTime = Math.sin(speed + sinI + sinJ) / 2 + 0.5 // range: [0, 1]
      const mappedSinTimeSlow = Math.sin(speed / 1.616034 + sinI + sinJ) / 2 + 0.5 // range: [0, 1]
      const _a = oscTriA(mappedSinTime, 1) / 2 + 0.5 // range: [0, 1]
      const _aSlow = oscTriA(mappedSinTimeSlow, 1) / 2 + 0.5 // range: [0, 1]
      
      const hue = _a * _a * 100 + 250   // range: [0, 360]
      const saturation = _a * _a * 80 - 15 // range: [0, 100]
      const lightness = _aSlow * 70 - 35 // range: [0, 100]
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`

      const radius = _a // range: [0, 1]

      dotsData[i][j].x = relativePosX
      dotsData[i][j].y = relativePosY
      dotsData[i][j].radius = radius
      dotsData[i][j].color = color
    }
  }
}

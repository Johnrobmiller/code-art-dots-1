import { STARTING_TIME, TEMPO } from "./util/constants";
import { dotsData, xPos, yPos } from "./util/globalStates";
import { IDotData } from "./util/types";

export default function calculateDots(timestamp: number) {
  const speed = timestamp / TEMPO + STARTING_TIME

  dotsData.forEach((xArrayOfDots, i) => {

    // const relativeI = xMax - Math.abs(i + xPos) % xMax

    xArrayOfDots.forEach((dotData, j) => {

      // const relativeJ = Math.abs(j + yPos) % yMax

      // range between 0 and 1
      const o1 = (Math.sin(speed + ((i & j) - (j / 100))) + 1) / 2
      // TODO: make this a guarenteed value between 0 and 1 and then use the radius dot multiplier const to scale it in drawDots
      const o10 = (Math.sin(speed * 10 + ((i & j) - (j / 100))) + 1) * 4
      const color = `hsl(${((o1 * 100 & speed) + 180) * (speed / 4)}, ${(o1 / 2 + 0.5) * 100 & speed}%, ${(o1 / 2 + 0.5) * 100 & speed}%)`
      
      const newDotData: IDotData = {
        x: i,
        y: j,
        radius: o10,
        color
      }
      dotsData[i][j] = newDotData
    })
  })
}
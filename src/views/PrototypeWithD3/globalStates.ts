import _ from "lodash";
import { IDotData } from "./types";

export const xMax = 100;
export const yMax = 100;

export const dotsData = _.times(xMax, Number).map(x => {
  return _.times(yMax, Number).map(y => {
    const dotData: IDotData = {
      x: 100,
      y: 75,
      radius: 50,
      color: 'green'
    }
    return dotData
  })
})

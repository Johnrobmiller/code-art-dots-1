import _ from "lodash";
import { X_MAX, Y_MAX } from "./constants";
import { IDotData } from "./types";

export const dotsData = _.times(X_MAX, Number).map(x => {
  return _.times(Y_MAX, Number).map(y => {
    const dotData: IDotData = {
      x,
      y,
      radius: 0,
      color: 'black'
    }
    return dotData
  })
})

export const xPos = 0
export const yPos = 0
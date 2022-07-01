import _ from "lodash";
import { X_MAX, Y_MAX } from "./constants";
import { IDotData } from "./types";

export const dotsData = _.times(X_MAX, Number).map((x) => {
  return _.times(Y_MAX, Number).map((y) => {
    const dotData: IDotData = {
      x,
      y,
      radius: 0,
      color: "black",
    };
    return dotData;
  });
});

export const pos: [number, number] = [0, 0];
export const momentum: [number, number] = [0, 0];

export const keyStates = {
  isDown: false,
  isLeft: false,
  isRight: false,
  isUp: false,
}

export const renderStates = {
  shouldRender: true,
}

export const time = {
  tempo: 0.00001,
  tempoHotkeySensitivity: 1.333333
}
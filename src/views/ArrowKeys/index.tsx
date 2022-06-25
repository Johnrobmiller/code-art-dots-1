import _, { times } from "lodash";
import { useState } from "react";

// @ts-expect-error no types for this library
import useAnimationFrame from "use-animation-frame";

// ! ---------------------------
// ! DANGEROUSLY SET GLOBAL VARS
// ! ---------------------------

let shouldRenderThisFrame = false;
const startingTime = Date.now();

// TODO: this needs to get abstracted out
// these need to be global vars because they should not trigger a render.
// renders are extremely expensive on this component and should be as infrequent as possible.
let isLeft = false;
let isRight = false;
let isUp = false;
let isDown = false;
// TODO: duplicated code here, fix
const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
  const { code } = keyboardEvent;
  switch (code) {
    case "KeyS":
    case "ArrowDown":
      isDown = true;
      break;
    case "KeyW":
    case "ArrowUp":
      isUp = true;
      break;
    case "KeyA":
    case "ArrowLeft":
      isLeft = true;
      break;
    case "KeyD":
    case "ArrowRight":
      isRight = true;
      break;
  }
};
const handleKeyUp = (KeyboardEvent: KeyboardEvent) => {
  const { code } = KeyboardEvent;
  switch (code) {
    case "KeyS":
    case "ArrowDown":
      isDown = false;
      break;
    case "KeyW":
    case "ArrowUp":
      isUp = false;
      break;
    case "KeyA":
    case "ArrowLeft":
      isLeft = false;
      break;
    case "KeyD":
    case "ArrowRight":
      isRight = false;
      break;
  }
};
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// ! ---------------
// ! PHYSICS UPDATER
// ! ---------------

// Todo: clean up this mess, organize, etc.

const xMaxMomemtum = 2;
const yMaxMomemtum = 2;
let xMomentum = 0;
let yMomentum = 0;

let xPos = 0;
let yPos = 0;

const updatePhysics = () => {
  if (isRight) Math.min(xMaxMomemtum, (xMomentum += 1));
  else if (xMomentum > 0) xMomentum = Math.max(0, xMomentum - 3);

  if (isLeft) Math.max(-xMaxMomemtum, (xMomentum -= 1));
  else if (xMomentum < 0) xMomentum = Math.min(0, xMomentum + 3);

  if (isUp) Math.min(yMaxMomemtum, (yMomentum += 1));
  else if (yMomentum > 0) yMomentum = Math.max(0, yMomentum - 3);

  if (isDown) Math.max(-yMaxMomemtum, (yMomentum -= 1));
  else if (yMomentum < 0) yMomentum = Math.min(0, yMomentum + 3);

  // todo: actual momentun
  // https://www.mathopenref.com/arccos.html
  // const momentumTotalSum = xMomentum + yMomentum
  // const roundedMomemtum = Math.sqrt(xMomentum * xMomentum + yMomentum + yMomentum)

  xPos += xMomentum;
  yPos += yMomentum;
};

setInterval(() => {
  updatePhysics();
}, 10); // updating at around 100 fps, the exact number is not too important for now

// array vars
const maxX = 100;
const maxY = 70;
const xArray = _.times(maxX);
const yArray = _.times(maxY);

//! /////////////

window.requestAnimationFrame(step);

let start: number | undefined;
let previousTimestamp = 0;
let dotsEl: SVGElement | null = null;

function step(timestamp: number) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  if (!dotsEl) dotsEl = document.getElementById("dots") as SVGElement | null;
  if (previousTimestamp !== timestamp && dotsEl) {
    // console.log('fps', 1000 / (timestamp - previousTimestamp))

    const tempo = timestamp / 10000 + 5000;

    const dotData = xArray.map((x, i) => {
      const relativeI = maxX - (Math.abs(i + xPos) % maxX);

      return yArray.map((y, j) => {
        const relativeJ = Math.abs(j + yPos) % maxY;
        const o1 = (Math.sin(tempo + ((i & j) - j / 100)) + 1) / 2;
        const o10 = (Math.sin(tempo * 10 + ((i & j) - j / 100)) + 1) / 2;

        return {
          cx: relativeI,
          cy: relativeJ,
          r: o10 / 2,
          fill: `
            hsl(
              ${(((o1 * 100) & tempo) + 180) * (tempo / 4)}, 
              ${((o1 / 2 + 0.5) * 100) & tempo}%, 
              ${((o1 / 2 + 0.5) * 100) & tempo}%
            )`,
        };
      });
    });

    Array.from(dotsEl.children).forEach((circleSvg, flattenedIndex) => {
      const i = Math.floor(flattenedIndex / maxY);
      const j = flattenedIndex % maxY;
      const currentDotData = dotData[i][j];
      circleSvg.setAttribute("cx", `${currentDotData.cx}`);
      circleSvg.setAttribute("cy", `${currentDotData.cy}`);
      circleSvg.setAttribute("r", `${currentDotData.r}`);
      circleSvg.setAttribute("fill", `${currentDotData.fill}`);
    });
  }

  previousTimestamp = timestamp;
  window.requestAnimationFrame(step);
}

//! //////////////

const ArrowKeys = () => {
  // ! --------------
  // ! RETURNING MAIN
  // ! --------------

  return (
    <div style={{ backgroundColor: "#000000" }}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute" }}
      >
        {
          <circle
            cx={50}
            // TODO: figure out what this number should be
            cy={32}
            r={1}
            strokeWidth={0.5}
            stroke="black"
            fill="white"
          />
        }
      </svg>
      <svg id="dots" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {xArray.map((x, i) => {
          return yArray.map((y, j) => (
            <circle cx={0} cy={0} r={0} fill="black" />
          ));
        })}
      </svg>
    </div>
  );
};

export default ArrowKeys;

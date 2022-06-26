import _ from "lodash";
import calculateDots from "./calculateDots";
import drawDots from "./drawDots";
import update from "../util/update";
import drawGameObjects from "./drawGameObjects";

export default function renderDots() {

  // ! -----------
  // ! DEFINITIONS
  // ! -----------

  const canvas = document.getElementById("dots-canvas") as HTMLCanvasElement | null;
  if (!canvas) {
    throw Error("Canvas not found");
  }

  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) {
    throw Error("Canvas context not found");
  }

  // ! -------------------------
  // ! SETTING CANVAS DIMENSIONS
  // ! -------------------------

  // Get the DPR and size of the canvas
  const DPR = window.devicePixelRatio;

  // Set the "actual" size of the canvas
  canvas.width = window.innerWidth * DPR;
  canvas.height = window.innerHeight * DPR;
  
  // Scale the context to ensure correct drawing operations
  ctx.scale(DPR, DPR);
  
  // Set the "drawn" size of the canvas
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';

  // ! ---------
  // ! RENDERING
  // ! ---------

  const makeNewDots = (timestamp: number, frameCount: number) => {
    if (frameCount % 2 === 0) drawDots(ctx, canvas, frameCount);
    drawGameObjects(ctx, canvas)
    calculateDots(timestamp);
  };

  update(makeNewDots);
}

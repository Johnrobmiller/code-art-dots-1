import _ from "lodash";
import update from "../util/update";
import drawGameObjects from "./drawGameObjects";

export default function renderGameObjects() {
  const canvas = document.getElementById("game-objects-canvas") as HTMLCanvasElement | null;
  if (!canvas) {
    throw Error("Canvas not found");
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw Error("Canvas context not found");
  }

  const gameObjectStep = (timestamp: number) => {
    drawGameObjects(ctx, canvas);
    // calculateGameObjectPhysics(timestamp);
  };

  update(gameObjectStep);
}

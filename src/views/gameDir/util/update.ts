import { renderStates } from "./globalStates";

export default function update(doThisEveryUpdate: (timestamp: number, frameCount: number) => void) {
  let previousTimeStamp = -1;
  let frameCount = 0;

  function step(timestamp: number) {
    if (!renderStates.shouldRender) return
    if (previousTimeStamp !== timestamp) {
      // console.log('fps', 1000 / (timestamp - previousTimeStamp))
      doThisEveryUpdate(timestamp, frameCount++);
    }

    previousTimeStamp = timestamp;
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

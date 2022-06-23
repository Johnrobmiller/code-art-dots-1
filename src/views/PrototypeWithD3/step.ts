export default function update(doThisEveryUpdate: (timestamp: number) => void) {
  let previousTimeStamp = -1

  function step(timestamp: number) {
    if (previousTimeStamp !== timestamp) {
      // console.log('fps', 1000 / (timestamp - previousTimeStamp)) 
      doThisEveryUpdate(timestamp)
    }

    previousTimeStamp = timestamp
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step)
}
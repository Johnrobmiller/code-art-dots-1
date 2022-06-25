window.requestAnimationFrame(step);

let start: number | undefined, previousTimestamp: number | undefined;

function step(timestamp: number) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  if (previousTimestamp !== timestamp) {
    console.log("timestamp", timestamp);
  }

  previousTimestamp = timestamp;
  window.requestAnimationFrame(step);
}

export {};

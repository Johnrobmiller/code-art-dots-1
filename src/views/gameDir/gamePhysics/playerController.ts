import { keyStates, time } from "../util/globalStates";

const handleKeyEvent = (keyboardEvent: KeyboardEvent, isKeyPressed: boolean) => {
  handleMovementEvent(keyboardEvent, isKeyPressed);
  if (isKeyPressed) {
    handleTempoChangeEvent(keyboardEvent)
  }
};

const handleMovementEvent = (keyboardEvent: KeyboardEvent, isKeyPressed: boolean) => {
  const { code } = keyboardEvent;
  switch (code) {
    case "KeyS":
    case "ArrowDown":
      keyStates.isDown = isKeyPressed;
      break;
    case "KeyW":
    case "ArrowUp":
      keyStates.isUp = isKeyPressed;
      break;
    case "KeyA":
    case "ArrowLeft":
      keyStates.isLeft = isKeyPressed;
      break;
    case "KeyD":
    case "ArrowRight":
      keyStates.isRight = isKeyPressed;
      break;
  }
}

const handleTempoChangeEvent = (keyboardEvent: KeyboardEvent) => {
  if (keyboardEvent.code === "Equal") time.tempo *= time.tempoHotkeySensitivity
  if (keyboardEvent.code === "Minus") time.tempo /= time.tempoHotkeySensitivity
}

export default function playerController() {
  document.addEventListener("keydown", (e) => handleKeyEvent(e, true));
  document.addEventListener("keyup", (e) => handleKeyEvent(e, false));
}
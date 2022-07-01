import { ACCELERATION_RATE, DEACCELERATION_RATE, MAX_MOMENTUM } from "../util/constants";
import { keyStates, momentum, pos } from "../util/globalStates";

const doThisEveryPhysicsFrame = () => {
  handleMovement()
};

const handleMovement = () => {
  if (keyStates.isRight) momentum[0] = Math.min(MAX_MOMENTUM, (momentum[0] + ACCELERATION_RATE));
  else if (momentum[0] > 0) momentum[0] = Math.max(0, momentum[0] - DEACCELERATION_RATE);

  if (keyStates.isLeft) momentum[0] = Math.max(-MAX_MOMENTUM, (momentum[0] - ACCELERATION_RATE));
  else if (momentum[0] < 0) momentum[0] = Math.min(0, momentum[0] + DEACCELERATION_RATE);

  if (keyStates.isUp) momentum[1] = Math.min(MAX_MOMENTUM, (momentum[1] + ACCELERATION_RATE));
  else if (momentum[1] > 0) momentum[1] = Math.max(0, momentum[1] - DEACCELERATION_RATE);

  if (keyStates.isDown) momentum[1] = Math.max(-MAX_MOMENTUM, (momentum[1] - ACCELERATION_RATE));
  else if (momentum[1] < 0) momentum[1] = Math.min(0, momentum[1] + DEACCELERATION_RATE);

  // todo: actual momentun
  // https://www.mathopenref.com/arccos.html
  // const momentumTotalSum = momentum[0] + momentum[1]
  // const roundedMomemtum = Math.sqrt(momentum[0] * momentum[0] + momentum[1] + momentum[1])

  pos[0] += momentum[0];
  pos[1] += momentum[1];
}

let previousNow = -1

export default function updatePhysics() {
  const physicsInterval = setInterval(() => {
    const now = Date.now()
    if (now !== previousNow) {
      // console.log('physics fps', 1000 / (now - previousNow))
      doThisEveryPhysicsFrame();
    }

    previousNow = now
  }, 20); // TODO: figure out which fps is best for physics updater

  return () => clearInterval(physicsInterval)
}

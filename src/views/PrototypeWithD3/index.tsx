import { useEffect, useState } from "react";
import playerController from "./gamePhysics/playerController";
import updatePhysics from "./gamePhysics/updatePhysics";
import renderDots from "./renderDots";
import renderGameObjects from "./renderGameObjects";
import { renderStates } from "./util/globalStates";

export default function PrototypeWithD3() {
  
  // needed to stop the react cleanup function from firing on the first render
  const [hasInitiallyRendered, setHasInitiallyRendered] = useState(false)
  
  useEffect(() => {
    setHasInitiallyRendered(true)

    renderDots()
    renderGameObjects()
    const stopUpdatingPhysics = updatePhysics()
    playerController()
    
    const stopUpdatingEverything = () => {
      if (!hasInitiallyRendered) return
      renderStates.shouldRender = false
      stopUpdatingPhysics()
    }
    return stopUpdatingEverything
  }, []);

  return (
    <>
      <canvas
        id="dots-canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        style={{
          backgroundColor: "black",
        }}
      />
      <canvas
        id="game-objects-canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          position: "absolute",
          top: 0,
          left: 0
        }}
      />
    </>
  );
}

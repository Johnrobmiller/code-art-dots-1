import { useEffect, useState } from "react";
import playerController from "./gamePhysics/playerController";
import updatePhysics from "./gamePhysics/updatePhysics";
import renderDots from "./renderDots";
import { renderStates } from "./util/globalStates";

export default function Game() {
  
  // needed to stop the react cleanup function from firing on the first render
  const [hasInitiallyRendered, setHasInitiallyRendered] = useState(false)
  
  useEffect(() => {
    setHasInitiallyRendered(true)

    renderDots()
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
    <div style={{
      width: "100%",
      height: "100vh",
      backgroundColor: "black"
    }}>
      <canvas
        id="dots-canvas"
      />
    </div>
  );
}

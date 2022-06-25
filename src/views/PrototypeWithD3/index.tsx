import { useEffect } from "react"
import renderDots from "./renderDots"

export default function PrototypeWithD3() {

  useEffect(() => {
    renderDots()
  }, [])

  return (
    // <div style={{
    //   width: "100%",
    //   backgroundColor: "black",
    // }}> 
      <canvas id='canvas' width={window.innerWidth} height={window.innerHeight} style={{
        backgroundColor: 'black',
        // display: 'block',
        // margin: 'auto'
      }} />
    // </div>
  )
}
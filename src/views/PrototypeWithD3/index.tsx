import { useEffect } from "react"
import renderDots from "./renderDots"

export default function PrototypeWithD3() {

  useEffect(() => {
    renderDots()
  }, [])

  return (
    <canvas id='canvas' />
  )
}
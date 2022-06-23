import { useEffect } from "react"
import renderDots from "./renderDots"

export default function PrototypeWithD3() {

  useEffect(() => {
    renderDots([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  }, [])

  return (
    <div id='root' />
  )
}
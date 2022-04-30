import _ from 'lodash'
import { useEffect, useState } from 'react'

const Prototype = () => {

  const [now, setNow] = useState<number>(20)

  useEffect(() => {
    const nowInterval = setInterval(() => {
      setNow(prev => prev + 0.2)
    }, 50)
    return () => clearInterval(nowInterval)
  }, [])

  const xArray = _.times(100)
  const yArray = _.times(100)

  const dots = xArray.map((x, i) => {
    return yArray.map((y, j) => {
      return (
        <circle 
          cx={i} 
          cy={j} 
          r={(Math.sin(now + ((i & j) - (j / 100))) + 1) / 5} 
          fill={`hsl(240, 50%, 70%)`} 
        />
      )
    })
  })

  return (
    <>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {
          dots
        }
      </svg>
    </>
  )
}

export default Prototype
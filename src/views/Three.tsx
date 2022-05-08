import _ from 'lodash'
import { useEffect, useState } from 'react'

const Three = () => {

  const [now, setNow] = useState<number>(20)

  useEffect(() => {
    const nowInterval = setInterval(() => {
      setNow(prev => prev + 0.01)
    }, 50)
    return () => clearInterval(nowInterval)
  }, [])

  const xArray = _.times(50)
  const yArray = _.times(50)

  const dots = xArray.map((x, i) => {
    return yArray.map((y, j) => {
      const x1 = i
      const x2 = i + Math.sin(now * i) 
      const y1 = j
      const y2 = j + 1
      const slope = (y2 - y1) / (x2 - x1)
      const xDiff = x2 - x1
      const yDiff = y2 - y1
      const qualifier = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2))

      return (
        <line 
          x1={x1}
          x2={x1 + (xDiff / qualifier) * .73}
          y1={y1}
          y2={y1 + (yDiff / qualifier) * .73} 
          // r={(Math.sin(now + ((i & j) - (j / 100))) + 1) / 5} 
          stroke={`hsl(240, 50%, 70%)`}
          strokeWidth={0.1}
          strokeLinecap='round'
        />
      )
    })
  })

  return (
    <div style={{ backgroundColor: '#051a27'}}>
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        {
          dots
        }
      </svg>
    </div>
  )
}

export default Three
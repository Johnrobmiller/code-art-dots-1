import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'

import One from './views/One'
import Two from './views/Two'
import Three from './views/Three'
import ArrowKeys from './views/ArrowKeys'

const Root = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/one' element={<One />} />
      <Route path='/two' element={<Two />} />
      <Route path='/three' element={<Three />} />
      <Route path='/arrow-keys' element={<ArrowKeys />} />
    </Routes>
  )
}

export default Root

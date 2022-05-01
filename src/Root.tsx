import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'

import One from './views/One'

import Two from './views/Two'
const Root = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/one' element={<One />} />
      <Route path='/two' element={<Two />} />
    </Routes>
  )
}

export default Root

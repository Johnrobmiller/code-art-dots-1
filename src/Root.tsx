import { Route, Routes } from 'react-router-dom'

// import logo from './logo.svg'
import Prototype from './views/Prototype'

const Root = () => {

  return (
    <Routes>
      <Route path='/' element={<Prototype />} />
    </Routes>
  )
}

export default Root

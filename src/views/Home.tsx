import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Link to='/one'>Link to anim one</Link>
      <br/>
      <Link to='/two'>Link to anim two</Link>
      <br/>
      <Link to='/three'>Link to anim three</Link>
      <br/>
      <Link to='/arrow-keys'>Link to arrow keys prototype</Link>
      <br/>
      <Link to='/prototypeWithD3'>Link to d3 prototype</Link>
    </>
  )
}

export default Home
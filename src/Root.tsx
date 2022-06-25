import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";

import One from "./views/One";
import Two from "./views/Two";
import Three from "./views/Three";
import ArrowKeys from "./views/ArrowKeys";
import PrototypeWithD3 from "./views/PrototypeWithD3";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/one" element={<One />} />
      <Route path="/two" element={<Two />} />
      <Route path="/three" element={<Three />} />
      <Route path="/arrow-keys" element={<ArrowKeys />} />
      <Route path="/prototypeWithD3" element={<PrototypeWithD3 />} />
    </Routes>
  );
};

export default Root;

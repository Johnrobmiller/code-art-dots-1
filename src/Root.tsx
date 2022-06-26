import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import GameDir from "./views/gameDir";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<GameDir />} />
    </Routes>
  );
};

export default Root;

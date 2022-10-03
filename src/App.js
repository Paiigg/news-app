import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import World from "./components/World";
import Business from "./components/Business";
import Health from "./components/Health";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/world" element={<World />} />
        <Route path="/business" element={<Business />} />
        <Route path="/health" element={<Health />} />
      </Routes>
    </div>
  );
}

export default App;

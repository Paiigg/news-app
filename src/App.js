import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import World from "./components/World";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/world" element={<World />} />
      </Routes>
    </div>
  );
}

export default App;

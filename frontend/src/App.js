import logo from "./logo.svg";
import "./App.css";
import Sponser from "./Components/Sponser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Attendence from "./Components/Attendence";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sponser />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/attendence" element={<Attendence />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

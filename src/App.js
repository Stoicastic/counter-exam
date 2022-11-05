import {  Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Errorpage from "./Components/Errorpage";


function App() {
  return (
    <div className="App">
      

        <Navbar />
        <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
        </>
        

    
    </div>
  );
}

export default App;

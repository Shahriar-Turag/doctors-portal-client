import Navbar from "./Pages/Home/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes path="/" element={<Home />} />
            <Routes path="about" element={<About />} />
        </div>
    );
}

export default App;

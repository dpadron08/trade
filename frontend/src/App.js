import "bootstrap/dist/css/bootstrap.min.css";
import react from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Map from "./pages/map";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="container">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          TRADE
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Map
            </Link>
          </li>
          <li className="nav-item" >
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </div>
      </nav>
        <Routes>
          <Route path="/" element={<Map text="map text"/>}/> 
          <Route path="/about" element={<About text="about text"/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

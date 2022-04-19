import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Map from "./pages/map";
import About from "./pages/about";
import ThreeJsViewer from "./pages/threejsviewer";

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
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/threejs" className="nav-link">
                  Threejs Sample
                </Link>
              </li>
            </div>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <Map storymapsLink="https://storymaps.arcgis.com/stories/d67072087566491d8c544f9df151b328" />
              }
            />
            <Route path="/about" element={<About text="about text" />} />
            <Route path="/threejs" element={<ThreeJsViewer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

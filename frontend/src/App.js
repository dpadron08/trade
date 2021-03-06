import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Map from "./pages/map";
import About from "./pages/about";
import ThreeJsViewer from "./pages/threejsviewer";
import Cards from "./pages/cards";
import History from "./pages/history";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand navbar-light bg-light">
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
                <Link to="/history" className="nav-link">
                  History of Dura-Europos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/threejs_plaque" className="nav-link">
                  Plaque Artifact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/threejs_amphora" className="nav-link">
                  Amphora Artifact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/threejs_thymiaterion" className="nav-link">
                  Thymiaterion Artifact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cards" className="nav-link">
                  All Objects
                </Link>
              </li>
            </div>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <Map storymapsLink="https://storymaps.arcgis.com/stories/5e52bc24ec784ae18880409aa03401b7?cover=false" />
              }
            />
            <Route
              path="/about"
              element={
                <About text="TRADE is a project which seeks to investigate the relationship of Dura Europos to the surrounding ancient city sites on a macro and micro scale. Dura Europos was used as a context by which to learn and understand the applications of computer science and data science methods to the humanities. In particular, our project aims to use a modest subset of these tools to create a website, with the goal of incrementally increasing digital availability of information about Dura Europos. " />
              }
            />
            <Route
              path="/threejs_plaque"
              element={<ThreeJsViewer name="Plaque" />}
            />
            <Route
              path="/threejs_amphora"
              element={<ThreeJsViewer name="Amphora" />}
            />
            <Route
              path="/threejs_thymiaterion"
              element={<ThreeJsViewer name="Thymiaterion" />}
            />
            <Route path="/cards" element={<Cards />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

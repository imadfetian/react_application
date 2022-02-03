import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, Link, BrowserRouter as  Router} from 'react-router-dom';
import Gallery from "./components/gallery";
import About from "./components/about";

function App() {
  return (

      <Router>
          <nav className="navbar navbar-expand navbar-brand m-2">
              <ul className="navbar-nav">
                  <li>
                      <Link className="nav-link" to="/home">Home</Link>
                  </li>
                  <li>
                      <Link className="nav-link" to="/counter">Counter</Link>
                  </li>
                  <li>
                      <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li>
                      <Link className="nav-link" to="/gallery">Gallery</Link>
                  </li>
              </ul>
          </nav>
          <div className="container">
              <Routes>
                  <Route path="/home"></Route>
                  <Route path="/counter"  element={<Counter/>}></Route>
                  <Route path="/about"  element={<About/>}></Route>
                  <Route path="/gallery" element={<Gallery/>}></Route>
              </Routes>
          </div>

      </Router>

  );
}

export default App;

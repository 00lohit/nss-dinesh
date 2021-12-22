import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Media from "./components/Media";
import Events from "./components/Events";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <NavLink to="/" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Notifications" >Notifications</NavLink>
            </li>
            <li>
              <NavLink to="/Media">Media</NavLink>
            </li>
            <li>
              <NavLink to="/Events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Media" element={<Media />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

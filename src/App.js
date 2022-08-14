import "./App.css";
import SideBar from "./components/Sidebar";
import sidebar_menu from "./constants/sidebar-menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

import FeeType from "./pages/FeeType";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="dashboard-container">
          <SideBar menu={sidebar_menu} />

          <div className="dashboard-body">
            <Routes>
              <Route path="*" element={<div></div>} />
              <Route exact path="/" element={<div></div>} />
              <Route exact path="/management" element={<FeeType />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

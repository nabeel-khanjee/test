import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AboutOverview from "./Pages/AboutOverview";
import AboutTeam from "./Pages/AboutTeam";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 sidebar-container">
            <Sidebar />
          </div>
          <div className="col-lg-10 content-container">
            <Header />
            <div className="inner-content-container">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/overview" element={<AboutOverview />} />
                <Route path="/about/team" element={<AboutTeam />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { css } from "@emotion/react";
import RiseLoader from "react-spinners/RiseLoader";
import Header from "./components/common/navigation/Header";
import SideBar from "./components/common/navigation/Sidebar";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import EmployeeSchedule from "./pages/EmployeeSchedule";
import Home from "./pages/Home";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Login from "./pages/LoginForm";
//sidebar css from react-pro-sidebar module
import "react-pro-sidebar/dist/css/styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CalendarScheduler from "./components/common/Calendar/CalendarScheduler";
function App() {
  const store = configureStore();

  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  if (userName == "") {
    return <Login setUserName={setUserName} />;
  }

  return (
    <main className="App">
      <Router>
        {/* <Header /> */}
        <main className="main-container">
          <SideBar></SideBar>
          <div className="tp-position">
            <div className="mr-20">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                {userName == "admin" ? (
                  <Route path="/schedule" element={<Schedule />} />
                ) : (
                  <Route path="/schedule" element={<EmployeeSchedule />} />
                )}

                <Route path="/notification" element={<Notification />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </main>
      </Router>
    </main>
  );
}

export default App;

// import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";

function App() {
  const [token,setToken]=useState(null);

  const assignToken = () => {
    setToken(localStorage.getItem('token'));
  }

  return (
    <Router>
      <Navbar token={token} />
      <Routes>
        <Route exact path="/" element={<Home assignToken={assignToken} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

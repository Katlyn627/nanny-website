import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Settings from "./pages/Settings";

import SignupForm from "./components/SignupForm";
import Calendar from "./components/Calendar";
import Blog from "./components/Blog/Router"



function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/router" element={<Blog />} />
          <Route path="/form" element={<SignupForm />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
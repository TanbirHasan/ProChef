
import './App.css';
import Home from './Pages/Home/Home';
import Allcourse from "./Pages/Courses/Allcourse";
import About from "./Pages/AboutME/Aboutme";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/ContactMe/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccordionButton } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Allcourse />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;


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
import RequireAuth from './Auth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import Notfound from './Pages/Notfound/Notfound';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/courses"
          element={
            <RequireAuth>
              <Allcourse />
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route exact path="*" element={<Notfound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

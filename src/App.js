
import './App.css';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"
import Slider from './components/Slider/Slider';


function App() {
  return (
    <div className="App">
     <Header />
     <Slider/>
     <Courses/>
     <Footer/>
    
    </div>
  );
}

export default App;

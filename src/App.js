
// import './App.css';
import About from './pages/About';

import Contact from './pages/Contact';


import Home from './pages/Home';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Testimonial from './pages/Testimonial';
import Fruits from './pages/Fruits';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  return (
    <>


 <Router>
 <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
     <Route  path="/about"element={<About/>} />
     
     <Route path="/testimonial" element={<Testimonial/>}  />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/ourfruit" element={<Fruits/>} />
     
    </Routes>
    <Footer/>
   </Router>
  
    </>
  );
}

export default App;

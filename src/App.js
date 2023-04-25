import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Booking from './pages/Booking';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
 <BrowserRouter>
        <Navbar/>
           <Routes>
             <Route path="/" element={<Home />}/>
               <Route path="cars" element={<Cars />} />
               <Route path="booking" element={<Booking />} />
               <Route path="services" element={<Services />} />
               <Route path="contact" element={<Contact />} />
               <Route path="about" element={<About />} />
               {/* <Route path="*" element={<NotFound />} /> */}
       
           </Routes>
           <Footer/>
         </BrowserRouter>

    
    </>
  );
}

export default App;

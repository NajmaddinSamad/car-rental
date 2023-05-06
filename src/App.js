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
import { useState, useEffect } from 'react';



function App() {
  const [loading, setLoading] = useState(false);
useEffect(()=>{
setLoading(true);
setTimeout(()=>{
  setLoading(false);
}, 5000);
}, []);
  return (
    <>
    {
      loading ?(
<div className='loader'>
<div class="cloader">
        <div class="clface">
          <div class="clsface">
            <div id="h2" class="hand"></div>
          </div>
          <div class="top"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
          <div id="sub" class="pin"></div>
          <div id="h1" class="hand"></div>
          <div id="main" class="pin"></div>
        </div>
      </div>
</div>
      
      ) : (
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
      )
    };
 

    
    </>
  );
}

export default App;

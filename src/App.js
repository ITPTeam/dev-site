import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Navbar from './commponents/Navbar';
import Home from './commponents/Home';
import About from './commponents/About';
import Download from './commponents/Download';
import Services from './commponents/Services';
import Team from './commponents/Team';
import Partners from './commponents/Partners';
import Prices from './commponents/Prices';
import Social from './commponents/Social';
import Contact from './commponents/Contact';
import Footer from './commponents/Footer';
import Testimonial from './commponents/Testimonial';
import Portfolio from './commponents/Portfolio';
import Counter from './commponents/Counter';
function App() {
  return (
    <div className="body">
      <header id="header" className="header-main">
      <Navbar/>
      </header>
      <Home/> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<>
            <About/> <Download/><Services/><Testimonial/><Portfolio/><Counter/><Partners/><Team/><Prices/> <Social/>  <Contact/>
                                </>} />
        <Route path='/about' element={<><About/></>} />
        <Route path='/services' element={<><Services/></>} />
        <Route path='/works' element={<><Testimonial/>
                                        <Portfolio/>
                                        <Counter/>
                                        <Partners/></>} />
        <Route path='/team' element={<><Team/></>} />
        <Route path='/prices' element={<><Prices/></>} />
        <Route path='/contact' element={<>  <Social/>
                                            <Contact/></>} />
      </Routes>   
      </BrowserRouter>     
      <Footer/>
    </div>
  );
}

export default App;

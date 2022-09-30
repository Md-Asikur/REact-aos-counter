import React from 'react'
import Home from './components/home/Home';
import Navbars from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './components/about/About';
import Test from './components/TestNav/Test';
import NavBar from './components/Successs Thapa Navbar/NavBar';
import Animate from './components/Animated bg/Animate';
import Anim2 from './components/Animated bg/Anim2';
import Anim3 from './components/Animated bg/Anim3';
import Anim4 from './components/Animated bg/Anim4';
import { AosEffect } from './components/Aos Scrolling/AosEffect';
import { Counter } from './components/AutoCounter.js/Counter';
import { Card1 } from './components/Count_Scroll_hover/Card1';




function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
        {/* <Navbars/> */}
        {/* <Test/> */}
      {/* <NavBar/>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
            <Route path="/service" element={<Animate/>}/>
      </Routes>
      </BrowserRouter> */}
      {/* <Animate/> */}
      {/* <Anim2/> */}
      {/* <Anim3 />
      <Anim4/> */}
      {/* <AosEffect/> */}
      {/* <Counter/> */}
      <Card1/>
    </div>
  );
}

export default App;

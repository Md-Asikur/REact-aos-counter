import React,{useState, useEffect} from 'react'
import Aos from 'aos'
import './aos.css'
export const AosEffect = () => {
    useEffect(() => {
    Aos.init ({duration:2000})
 
}, [])

  return (
      <div>
          <h1 className="text-danger text-center fs-3">First Aos Effct</h1>
          <div className='grids'>
              <div className='boxes'>1</div>
              <div className='boxes'>2</div>
              <div data-aos="fade-up" className='boxes'>3</div>
              <div data-aos="fade-down" className='boxes'>4</div>
              <div data-aos="fade-left" className='boxes'>5</div>
              <div data-aos="fade-right" className='boxes'>6</div>
                <div data-aos="fade-up-right" className='boxes'>3</div>
              <div data-aos="flip-down" className='boxes'>4</div>
              <div data-aos="flip-up" className='boxes'>5</div>
              <div data-aos="zoom-in-right" className='boxes'>6</div>
                <div data-aos="zoom-in-left" className='boxes'>3</div>
              <div data-aos="zoom-in" className='boxes'>4</div>
              <div data-aos="fade-left" className='boxes'>5</div>
                <div data-aos="fade-right" className='boxes'>6</div>
              
          </div>
          
    </div>
  )
}

import React from 'react'
import './About.css'
import img from '../images/png.png'
export default function About() {
  return (
      <div>
        <div class="box">
            <img src={img} alt="images"/>
            <div class="info">
                <h2>Person Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
        </div>

    </div>
  )
}

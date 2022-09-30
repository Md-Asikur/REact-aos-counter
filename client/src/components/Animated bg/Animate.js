import React, { Component } from 'react'
import './Anim.css'
import About from '../about/About.js'
export default class Animate extends Component {
  render() {
    return (
        <>
            <div class="banner-text">
        <ul>
            <li><a href="#">Home</a></li>            
            <li><a href="#">About</a></li>            
            <li><a href="#">Portfolio</a></li>            
            <li><a href="#">Services</a></li>            
            <li><a href="#">Contact</a></li>            
        </ul>
        
          <h2>Animated Background</h2>
        
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, eveniet, explicabo cumque incidunt saepe praesentium?</p>
    </div>
    
    <div class="animation-area">
        <ul class="box-area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
         
        </div>	
       
      </>
    )
  }
}

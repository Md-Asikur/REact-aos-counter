import React, { Component } from 'react'
import './Anim4.css'
export default class Anim4 extends Component {
  render() {
    return (
        
            <div className="wrapper">
         <div className="icon facebook">
            <div className="tooltip">
               Facebook
            </div>
            <span><i className="fab fa-facebook-f"></i></span>
         </div>
         <div className="icon twitter">
            <div className="tooltip">
               Twitter
            </div>
            <span><i className="fab fa-twitter"></i></span>
         </div>
         <div className="icon instagram">
            <div className="tooltip">
               Instagram
            </div>
            <span><i className="fab fa-instagram"></i></span>
         </div>
         <div className="icon github">
            <div className="tooltip">
               Github
            </div>
            <span><i className="fab fa-github"></i></span>
         </div>
         <div className="icon youtube">
            <div className="tooltip">
               YouTube
             </div>
           
            <span><i className="fab fa-youtube"></i></span>
          </div>
          <div className="linkss">
             <a href="#">Home</a>
             <a href="#">Home</a>
             
             <a href="#">Home</a>
              <a href="#">&copy;Home</a>
           
          </div>
       
      </div>
     
    )
  }
}

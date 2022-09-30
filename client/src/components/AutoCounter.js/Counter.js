import React,{useState} from 'react'
import './Counter.css'
import CountUp from 'react-countup'
import Trigger from 'react-scroll-trigger'
export const Counter = () => {
      const  [counter,setCounter]=useState(false)
  return (
      <>
       <Trigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
           <div className="count">
          <h1>
           {counter &&   <CountUp start={0} end={536} duration={3} delay={0 } />}
              </h1>
              <h2> Happy Client</h2>

    </div>
      </Trigger>
      
      
      </>
  )
}

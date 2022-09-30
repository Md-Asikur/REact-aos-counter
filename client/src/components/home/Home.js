import React,{useState,useEffect} from 'react'
import './Home.css'
import bg from '../images/3.jpg'
import bg1 from '../images/1.jpg'
import bg2 from '../images/4.jpg'
import bg3 from '../images/5.jpg'
import bg4 from '../images/6.jpg'
import bg5 from '../images/7.jpg'
import bg6 from '../images/8.jpg'
import bg7 from '../images/9.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DarCard from '../Card/DarCard'
import Datas from './MyData.json'
import axios from 'axios'
import Test from './Test.json'
import Images from './Map.js'
import { v4 as uuidv4 } from 'uuid'

export default function Home() {
//    const [posts, setPosts] = useState()
// useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/albums")
//       .then(res => {
//         console.log(res)
//         setPosts(res.data)
      
//       })
//       .catch(err => {
//     console.log(err)
//   })
  
   
//   }, [])
  
   let Data =Datas.map((data) => <DarCard key={uuidv4()} title={data.title} src={data.url} />)
    
  return (
       <>
     
      <div>
        <img src={bg} className="home-img img-fluid" />
      </div>
        <div className="d-flex flex-wrap m-4 p-3 justify-content-around mb-4 align-items-end">
      
         
        {Data}
        {/* { Images.map(item => 
          <div>
            <h1 style={{ color: "red" }}>{item.title}</h1>
           <img src={item.image} style={{height:"200px",width:"200px"}}></img>
          </div>
        )} */}
     
      
        {/* {posts.map(data => (
          <h1 key={data.id} className="text-warning text-center">{ data.title}</h1>
        )
          
        )} */}
       
          
      </div>
      <div className='container'>
      <div className='box'>
          <img src={bg7} alt="image" style={{height:"300px",width:"500px"}} />
      </div>
      </div>
    </>
  )
}

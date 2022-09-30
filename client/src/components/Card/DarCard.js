import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'
export default function DarCard(props) {
    const { title, src } = props;
  return (
      <div>
           {/* <Card style={{ width: '28rem',marginBottom:"20px"}}className="card">
            <Card.Img variant="top" src={src } />
      <Card.Body style={{fontSize:'1.7rem'}}>
                  <Card.Title>{ title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  variant="primary" href="/" style={{fontSize:'1.7rem'}}>Go somewhere</Button>
      </Card.Body>
    </Card> */}
        <div class="box">
            <img src={src} alt="images"/>
            <div class="info">
          <h2>{title }</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
        </div>
     

    </div>
  )
}

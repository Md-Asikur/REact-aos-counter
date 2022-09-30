import React,{useEffect,useState} from 'react'
import Aos from 'aos'
import EnterPrise from './enterprise.png'
import Facebook from './face.png'
import Partner from './partners.png'
import website from './website.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './card1.css'
import CountUp from 'react-countup'
import Trigger from 'react-scroll-trigger'

export const Card1 = () => {
   const  [counter,setCounter]=useState(false)
    useEffect(() => {
     Aos.init({duration:2000})
    }, [])
    
  return (
      <>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="fade-right" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="flip-up" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="flip-down" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="fade-right" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="fade-up" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="zoom-in" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="zoom-in" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="zoom-in-right" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="zoom-out-left" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
              </div>
              <div className="flex" data-aos="flip-up"> 
                  <div data-aos="fade-right" className="flex1"><h1><Trigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
           <div className="count">
          <h1>
           {counter &&   <CountUp start={0} end={1536} duration={3} delay={0 } />}
              </h1>
              <h2> Happy Client</h2>

    </div>
      </Trigger></h1></div>
                  <div data-aos="fade-up" className="flex1"><h1 style={{color:"red"}}><Trigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
           <div className="count">
          <h1 style={{color:"red"}}>
           {counter &&   <CountUp start={0} end={400} duration={3} delay={0 } />}
              </h1>
              <h2> Completed Project</h2>

    </div>
      </Trigger></h1></div>
                  
                  <div data-aos="fade-down" className="flex1"><h1><Trigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
           <div className="count">
          <h1>
           {counter &&   <CountUp start={0} end={36} duration={4} delay={0 } />}
              </h1>
              <h2> Services</h2>

    </div>
      </Trigger></h1></div>
                   <div data-aos="zoom-in-right" className="flex1"><h1 style={{color:"red"}}><Trigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
           <div className="count">
          <h1 style={{color:"red"}}>
           {counter &&   <CountUp start={0} end={226} duration={3} delay={0 } />}
              </h1>
              <h2> Members</h2>

    </div>
      </Trigger></h1></div>
              </div>
               <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="fade-right" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="flip-up" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="flip-down" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="fade-right" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="fade-up" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="zoom-in" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="zoom-in" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="zoom-in-right" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                     <Card data-aos="zoom-out-left" style={{ width: '28rem',marginBottom:"20px" }} className="cards-shadow">
      <Card.Img variant="top" src={Facebook} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    
                    
                  </div>
              </div>
          </div>
      
      </>
  )
}

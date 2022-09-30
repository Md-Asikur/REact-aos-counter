import React,{useState} from 'react'
  import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './test.css'
import png from '../images/png.png'
import Typewriter from 'typewriter-effect';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function Test() {
  const [color, setColor] = useState(false)
 
  const [change, setChange] = useState(false)
  
    const changebg = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
  window.addEventListener("scroll", changebg)
   
 
 const changeClick = () => {
    setChange(change)
  }
  return (
      <div  className='img-test'>
      


    <>
      {[ 'xxl'].map((expand) => (
          <Navbar key={expand} className={color ? "changenav" :"bgs" }  expand={expand}>
          <Container fluid>
            {/* <Navbar.Brand href="#" className="text-white bg-dark">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={changeClick} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={ change ? "" : "offcolor" }>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
                  <Nav.Link href="#action2" className="text-white">About</Nav.Link>
                   <Nav.Link href="#action1" className="text-white">Contact</Nav.Link>
                  <Nav.Link href="#action2" className="text-white">Our Team</Nav.Link>
                  <NavDropdown
                  title="Services"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  
                  >
                    <NavDropdown.Item href="#action3">custom Web design</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      custom wordpress theme design
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" >
                     Customization
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
             
    </>
  
    
    <div className='main-img'>
        <img src={png} className="img img-fluid"/>
  
          </div>
          <div className='mains'>
              <h4>I'm</h4>
              <h1>Asikur</h1>
              <h3>
        <Typewriter 
       options={{
      strings: [ 'Web Developer',"Web Designer","Software Engineer","Youtuber"],//npm i typewriter-effect
       autoStart: true,
              loop: true,
       delay:80,
       }}
/></h3> 
              <button>Learn More<ArrowRightAltIcon style={{fontSize:"2.2rem"}} /></button>
              <button>Hire Me<ArrowRightAltIcon style={{fontSize:"2.2rem"}}/></button>
          </div>


    </div>
  )
}

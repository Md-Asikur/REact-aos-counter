import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nabar.css'
import CallIcon from '@mui/icons-material/Call';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import logo from '../images/2.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import MenuIcon from '@mui/icons-material/Menu';
import bg from '../images/6.jpg'
import Typewriter from 'typewriter-effect';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
export default function Navbars() {
  const [color, setColor] = useState(false)
  const changeBg = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll',changeBg)
  return (
     <div className='Img'>
          <Navbar   expand="lg" className={color ? "navSc" : "bg"}>
      <Container fluid>
        {/* <Navbar.Brand href="#" className="text-white">Navbar scroll</Navbar.Brand> */}
        <img src={logo} style={{ height: "80px" }} className="img" />
        
        <Navbar.Toggle  aria-controls="navbarScroll"  />
      
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-6 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-primary"><HomeOutlinedIcon color="white" style={{fontSize:"1.9rem",marginRight:"5px",marginTop:"-6px"}}/>Home</Nav.Link>
            <Nav.Link href="#action2" className="text-primary"><Diversity3OutlinedIcon color="white" style={{fontSize:"1.9rem",marginRight:"5px",marginTop:"-6px"}}/>About</Nav.Link>
            <NavDropdown title="Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><CallIcon color="success" style={{fontSize:"1.6rem",marginRight:"5px"}} />Mobile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               <ContactMailSharpIcon color="success" style={{fontSize:"1.6rem",marginRight:"5px"}}/>Gmail
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               <FacebookOutlinedIcon color="success" style={{fontSize:"1.6rem",marginRight:"5px"}}/>Facebook
              </NavDropdown.Item>
            </NavDropdown>
              <NavDropdown title="Ocdur Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><CallIcon color="success" style={{fontSize:"1.6rem",marginRight:"5px"}} />Mobile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               <ContactMailSharpIcon color="success" style={{fontSize:"1.6rem",marginRight:"5px"}}/>Gmail
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               <FacebookOutlinedIcon color="success" style={{fontSize:"1.6rem",marginRight:"5px"}}/>Facebook
              </NavDropdown.Item>
            </NavDropdown>
           
            {/* <Nav.Link href="#action1" className="text-primary"><HomeOutlinedIcon color="white" style={{ fontSize: "1.9rem", marginTop: "-6px" }} />Services</Nav.Link>
            <Nav.Link href="#action1" className="text-danger"><HomeOutlinedIcon color="white" style={{ fontSize: "1.9rem", marginTop: "-6px" }} />PortFolio</Nav.Link> */}
             
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <div className='section'>
        <spnn className="btnn">Hi There!</spnn>
        <p>Hello I Am Asikur</p>
        <h1>I'am Asikur</h1>
        <h3>
        <Typewriter 
       options={{
      strings: [ 'Developer',"i am a full_stack","youtuber"],//npm i typewriter-effect
       autoStart: true,
              loop: true,
       delay:80,
       }}
/></h3> 
        
      
    </div>
        
    </div>
    
  );

    
  
}

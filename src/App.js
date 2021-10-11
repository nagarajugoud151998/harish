
import './App.css';
import {Nav} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import {Route ,Switch,Redirect} from 'react-router-dom';
import Car  from './Car';
import Mobile from './Mobile';
import MobilePhones from './Mobile'
import Motorcycle from './Motorcycle';
import Sale from './Sale';
import Forsalehomeappartment from './Sale'
import Sctoor from './Sctoor';
import Commerical from './Commerical';
import Rent from './Rent';
import Login from './Login';


function App() {
  return (
    <div>
      
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#" className="logo1">Olx</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1"></Nav.Link>
      <Nav.Link href="#action2"></Nav.Link>
      
      <NavDropdown title="Location" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Hyderabad</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Devarkonda</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Mahababanagar</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Nalgonda</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Kalwakurthy</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Warangal</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action"></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-6"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
      <NavDropdown title="Language" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">English</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Hindi</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Tamil</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action"></NavDropdown.Item>
      </NavDropdown>
      
      <Nav.Link href="#English" className="head1">English</Nav.Link>
      <Nav.Link href="#login" ><Link to='Login'>Login</Link></Nav.Link>
    </Form>
  </Navbar.Collapse>
</Navbar>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="title1">
              
  <Container className="head2">
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <NavDropdown title="ALL CATEGORIES" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"> <Link to="olx auto">OLX Auto (cars)</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><Link to="Properies">Properties</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><Link to="Something">Something</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"><Link to="Separated link">Separated link</Link></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features"><Link to="/car">Cars </Link></Nav.Link>
      <Nav.Link href="#Mobile phones"><Link to="/mobile">Mobilephones</Link></Nav.Link>
      <Nav.Link href="#Motorcycle"><Link to="motercycle">Motercycle</Link></Nav.Link>
      <Nav.Link href="#For Sale: Home&Appartment"><Link to="Sale">For Sale: Home&Appartment</Link> </Nav.Link>
      <Nav.Link href="#Scooter"><Link to="Scooter">Scooter</Link></Nav.Link>
      <Nav.Link href="#Commerical&Other Vechicales"><Link to="Commerical">Commerical&Other Vechicales</Link></Nav.Link>
      <Nav.Link href="#For Rent:Home&Appartment"><Link to="Rent">For Rent:Home&Appartment</Link></Nav.Link>
      
      
      
      

      {/* <NavDropdown title="ALL CATEGORIES" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">OLX Auto (cars)</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Properties</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="#deets"></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

   
   <Route path='/car' exact><Car></Car><Redirect to='/car'></Redirect></Route> 
   <Route path='/olx auto' exact><olxauto/></Route> 
   <Route path='/Properties' exact><properties/></Route> 
   <Route path='/Something' exact><something/></Route> 
   <Route path='/Separated link' exact><separatedlink/></Route> 
   <Route path='/Mobile' exact><MobilePhones></MobilePhones></Route> 
   <Route path='/Motercycle' exact><Motorcycle/></Route> 
   <Route path='/Sale' exact><Forsalehomeappartment/></Route> 
   <Route path='/Commerical' exact><Commerical/></Route> 
   <Route path='/Scooter' exact><Sctoor/></Route> 
   <Route path='/Rent' exact><Rent/></Route>
   <Route path='/Login' exact><Login/></Route>
  <Car></Car>
  <Mobile></Mobile>
  <Motorcycle></Motorcycle>
  <Sale></Sale>
  <Sctoor></Sctoor>
  <Commerical></Commerical>
  <Rent></Rent>
  <Login></Login>
    </div>
  );
}

export default App;


import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Navbar,Nav, Button, NavDropdown, Form, FormControl} from 'react-bootstrap'
import{NavLink} from 'react-router-dom'
import { ShoppingCart } from '@material-ui/icons';
const Navibar = ()=>{
return(
    <>
  
    <Navbar bg="light" expand="lg" style={{position:'fixed', marginTop:0, zIndex:'1', width:'100%'}} >
  <Navbar.Brand href="#home">Royal Fabrics</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="ml-auto">
      
     <NavLink className='nav-btn' exact activeClassName='active_class nav-link' to='/'>Home</NavLink>
      <NavLink className='nav-btn' exact activeClassName='active_class nav-link' to='/products'>Products</NavLink>      
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
      <Button variant="outline-success" style={{color:'black', margin:'5px 10px' }}><NavLink exact activeClassName='active_class nav-link' to='/login'>LogIn</NavLink></Button>
      
        <NavLink exact activeClassName='active_class nav-link' to='/cart'><ShoppingCart/></NavLink>
  </Navbar.Collapse>
</Navbar>
    </>
)


}

export default Navibar;
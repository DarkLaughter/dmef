import React from 'react'
import {withRouter, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'



const DmNav = () => {

    return (
    <Navbar bg="dark" variant="dark" expand="sm">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Races</Nav.Link>
         <Nav.Link href="#Equipment">Equipment</Nav.Link>
          <Nav.Link href="#Spells">Spells</Nav.Link>
        <NavDropdown title="The Game" id="basic-nav-dropdown">
          <NavDropdown.Item href="#monsters">Monsters</NavDropdown.Item>
          <NavDropdown.Item href="#Game-Mechanics">Game Mechanics</NavDropdown.Item>
          <NavDropdown.Item href="#">Rules</NavDropdown.Item>
        </NavDropdown>
      </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Navbar>
    )
}


export default withRouter(DmNav)

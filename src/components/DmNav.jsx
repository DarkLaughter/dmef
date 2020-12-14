import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'



const DmNav = () => {

    return (
      <Navbar bg="dark" variant="dark" expand='xl'>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Races</Nav.Link>
        <Nav.Link href="#features">Equipment</Nav.Link>
        <Nav.Link href="#pricing">Spells</Nav.Link>
        <Nav.Link href="#home">Monsters</Nav.Link>
        <Nav.Link href="#home">Game Mechanics</Nav.Link>
        <Nav.Link href="#home">Rules</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    )
}


export default DmNav

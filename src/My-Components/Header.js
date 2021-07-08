import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import PropTypes from 'prop-types'
// import { propTypes } from 'react-bootstrap/esm/Image';

 
export default function Header(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      {/* <Nav.Link href="#features">Features</Nav.Link> */}
      <Nav.Link href="#About">About</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}
// Header.defaultprops = {
//   title: "",
// }
Header.propTypes = {
 title: PropTypes.string
}

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { employeeUserMenu } from '../../constant/constant';

const Header = ({ Toggle }: any) => {


    return (
        <Navbar variant="white" className='text-white' bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand className='text-white' href="#home"><h3>Trishi Portal</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example"/>
          <Navbar.Collapse id="navbar-dark-example" className="justify-content-end">
            <Nav>
             <NavDropdown
                id="nav-dropdown-dark-example"
                title="User"     
                menuVariant="white">
                {employeeUserMenu.map((menu)=> <NavDropdown.Item key={menu.employeeId}  href="#action/3.2">{menu.employeeMenuName}</NavDropdown.Item>)}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
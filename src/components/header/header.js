import React from 'react';
import { Form, Button, FormGroup, FormControl, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
    
    <div className="header">
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Sistema de Gestão</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/clientes">Clientes</Nav.Link>
        <Nav.Link href="/produto">Produtos</Nav.Link>
        <Nav.Link href="/pedidos">Pedidos</Nav.Link>
        </Nav>
  </Navbar>
 
</div>
    
    
);
 
export default Header;


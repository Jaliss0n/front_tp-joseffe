import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cards.css';
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';




export default class Cards extends Component {
   
    render() {
        return(
            <div className="cardcenter">
                <Container fluid>
                <Row>
                   
                    
                    <div className="box1">
                        <Card border="primary" style={{ width: '18rem' }}>
                        
                        <Card.Header>Clientes</Card.Header>
                        <Card.Body>
                        <Card.Title>Cadastro de Clientes</Card.Title>
                        <Card.Text>
                            Clique aqui para ter acesso ao cadastro de clientes, inclusive obter
                            informação dos que ja estão.
                        </Card.Text>
    
                        <Card.Link href="/clientes"><Button variant="primary">Acessar</Button></Card.Link>
                        </Card.Body>
                        </Card></div>
                        
                        <div className="box2">
                        <Card border="success" style={{ width: '18rem' }}>
                        <Card.Header>Produtos</Card.Header>
                        <Card.Body>
            
                        <Card.Title>Cadastro de Produtos</Card.Title>
                         <Card.Text>
                         Clique aqui para ter acesso ao cadastro de Produtos, inclusive obter
                            informação dos que ja estão.
                        </Card.Text>
                        <Card.Link href="/produto"><Button variant="primary">Acessar</Button></Card.Link>

                        
                        </Card.Body>
                        </Card></div>
    
                        <div className="box3">
                        <Card border="danger" style={{ width: '18rem' }}>
                        <Card.Header>Pedidos</Card.Header>
                        <Card.Body>
            
                        <Card.Title>Acompanhar Pedidos</Card.Title>
                        <Card.Text>
                        Clique aqui para poder ter acesso aos Pedidos, inclusive obter
                            informação dos que ja estão.
                        </Card.Text>
                        <Card.Link href="/pedidos"><Button variant="primary">Acessar</Button></Card.Link>
                        </Card.Body>
                        </Card>
                        </div>
                    
                    
                </Row>
            </Container>
            </div>
        )
    
    }
}


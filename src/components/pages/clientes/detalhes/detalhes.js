import React, { Component } from 'react';
import { Link } from "react-router-dom";
import'./detalhes.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

 
export default class Detalhes extends Component {
    state = {
        cliente: {},
    };

    
 
    componentDidMount() {
        const { idCliente } = this.props.match.params;
 
        fetch(`http://localhost:3003/sistema/cliente/${idCliente}`)
            .then(cliente =>
                cliente.json().then(cliente => this.setState({ cliente: cliente }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { cliente: cliente, index } = this.state;
 
        /*if (cliente.ativo) {
            cliente.ativo = "Usuário Ativo";
        } else {
            cliente.ativo = "Usuário Inativo";
        }*/
 
        return (
            <div className="usuario-info">
                
                <ListGroup variant="flush">
                <ListGroup.Item><h5>Nome: </h5>{cliente.nome}</ListGroup.Item>
                <ListGroup.Item><h5>Endereço: </h5>{cliente.end}</ListGroup.Item>
                <ListGroup.Item><h5>Telefone: </h5>{cliente.telefone}</ListGroup.Item>
                <ListGroup.Item><h5>Email: </h5>{cliente.email}</ListGroup.Item>
                <ListGroup.Item><h5>Criado em: </h5>{cliente.createdAt}</ListGroup.Item>
                <ListGroup.Item><h5>Atualizado em: </h5>{cliente.updateAt}</ListGroup.Item>
                
                </ListGroup>
                
                <br />
                <>
                <ButtonGroup size="sg" className="mb-2">
                <Button ><Link id="btn" to={`/clientes`}><h4 id ="texto"> Voltar</h4></Link></Button>
                <Button ><Link id="btn" to={`/editar/${cliente.idCliente}`}><h4 id ="texto"> Editar</h4></Link></Button>
                <Button ><Link id="btn" to={`/delete/${cliente.idCliente}`}><h4 id ="texto"> Deletar</h4></Link></Button>
             
                </ButtonGroup>
                <br />
                <br/>
  
                </>
               
                
            </div >
        );
    }
}

/*<Link to={`/editarUsuario/${cliente.idCliente}`}> Editar </Link> <br />
                <Link to={`/deletarUsuario/${cliente.idCliente}`}> Deletar </Link> <br />*/

import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import './index.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./cliente.css"
 
export default class Cliente extends Component{

    constructor(props) {
        super(props);
 
        this.state = {
            cliente: [],
            erro: null
        };
    };
 
    componentDidMount() {
        fetch(`https://clientebd.herokuapp.com/sistema/cliente`)
            .then(cliente =>
                cliente.json().then(cliente => this.setState({ cliente: cliente }))
            )
            .catch(erro => this.setState({ erro }));
    };

    
    

    render() {

        const { cliente:cliente } = this.state;
 
        return (

            <div className="usuario-list">
                <Link to={`/novo`}> <button type="button" className="btn btn-success">Novo</button> </Link>
                <br /><br />
 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Ações</th>
                            <th scope="col"></th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {cliente.map((cliente, index) => (
                            <tr>
                                <th scope="row">{cliente.idCliente}</th>
                                <td>{cliente.nome}</td>
                                <td>{cliente.end}</td>
                                <td>{cliente.telefone }</td>
                                <td>{cliente.email}</td>
                                <td> <Link to={`/cliente/${cliente.idCliente}`}> <button type="button" className="btn btn-primary">Detalhes</button> </Link> </td>
                                <td> <Link to={`/editar/${cliente.idCliente}`}> <button type="button" className="btn btn-warning">Editar</button> </Link></td>
                                <td> <Link to={`/delete/${cliente.idCliente}`}> <button type="button" className="btn btn-danger">Excluir</button> </Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            )
    }
};



        
  


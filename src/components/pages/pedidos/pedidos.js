import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./pedidos.css"
import Cliente from '../clientes/cliente';
 
export default class Pedidos extends Component{

    constructor(props) {
        super(props);
 
        this.state = {
            pedidos: [],
            
            erro: null
        };
    };
 
    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}
        /sistema/pedidos`)
            .then(pedidos =>
                pedidos.json().then(pedidos => this.setState({ pedidos: pedidos }))
            )
            .catch(erro => this.setState({ erro }));
    };


    render() {

        const { pedidos:pedidos } = this.state;
 
        return (

            <div className="usuario-list">
                <Link to={`/novoPedido`}> <button type="button" class="btn btn-success">Novo</button> </Link>
                <br /><br />
 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">Id Pedido</th>
                            <th scope="col">Nome Pedido</th>
                            <th scope="col">Id Cliente</th>
                            <th scope="col">Id Produto</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Ações</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {pedidos.map((pedidos, index) => (
                            <tr>
                                <th scope="row">{pedidos.idPedido}</th>
                                <td>{pedidos.nomePedido}</td>
                                <td>{pedidos.clienteId}</td>
                                <td>{pedidos.produtoId}</td>
                                <td> <Link to={`/detalhesPed/${pedidos.idPedido}`}> <button type="button" class="btn btn-primary">Detalhes</button> </Link> </td>
                                <td> <Link to={`/deletarPedido/${pedidos.idPedido}`}> <button type="button" class="btn btn-danger">Excluir</button> </Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            )
    }
};

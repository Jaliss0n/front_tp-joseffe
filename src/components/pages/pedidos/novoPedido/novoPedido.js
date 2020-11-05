import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./novoPedido.css";
import Form from 'react-bootstrap/Form';
 
class novoPedido extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            pedidos: {
                nomePedido:"",
                clienteId:"",
                produtoId:""
                
            },
            erro: null,
            redirect: false
        };
    }
 
    exibeErro() {
        const { erro } = this.state;
 
        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
                </div>
            );
        }
    }
 
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/pedidos" />;
        } else {
            return (
                <div className ="formulario">
                    <Form onSubmit={this.handleSubmit} >
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="nomePedido">Nome Pedido</Form.Label>
                                <Form.Control
                                type="text" 
                                id="nomePedido" 
                                name="nomePedido" 
                                placeholder="Escreva o nome do Pedido"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.pedidos.nomePedido}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="clienteId">Id do Cliente</Form.Label>
                                <Form.Control
                                type="double" 
                                id="clienteId" 
                                name="clienteId" 
                                placeholder="Digite o id do cliente"
                                minLength="1"
                                maxLength="100"
                                required
                                value={this.state.pedidos.clienteId}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="produtoId">Id do Produto</Form.Label>
                                <Form.Control
                                type="double" 
                                id="produtoId" 
                                name="produtoId" 
                                placeholder="Digite o id do produto"
                                minLength="1"
                                maxLength="100"
                                required
                                value={this.state.pedidos.produtoId}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                   
                    
                    <br/>
                    <div className="btn-cadastrar">
                        <button type="submit" className="btn btn-primary">
                            Cadastrar
                    </button>
                        </div>            
                </Form>
                </div>
             
            );
        }
    }
 
    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
 
        this.setState(prevState => ({
            pedidos: { ...prevState.pedidos, [name]: value }
        }));
        console.log(value);
    };
 
    handleSubmit = event => {
        fetch(`${process.env.REACT_APP_API_URL}
        /sistema/pedidos`, {
            method: "post",
            body: JSON.stringify(this.state.pedidos),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch(erro => this.setState({ erro: erro }));
 
        event.preventDefault();
    };
}
 
export default novoPedido;

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./novo.css";
import Form from 'react-bootstrap/Form';
 
class novo extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            cliente: {
                nome:"",
                end: "",
                telefone: "",
                email: "",
               
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
            return <Redirect to="/clientes" />;
        } else {
            return (
                <div className ="formulario">
                    <Form onSubmit={this.handleSubmit} >
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="nome">Nome</Form.Label>
                                <Form.Control
                                type="text" 
                                id="nome" 
                                name="nome" 
                                placeholder="Escreva seu primeiro nome"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.cliente.nome}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="end">Endereço</Form.Label>
                                <Form.Control
                                type="text" 
                                id="end" 
                                name="end" 
                                placeholder="Escreva seu Endereço"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.cliente.end}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="telefone">Telefone</Form.Label>
                                <Form.Control
                                type="text" 
                                id="telefone" 
                                name="telefone" 
                                placeholder="Ex: 13 9966778855"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.cliente.telefone}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="email">Email</Form.Label>
                                <Form.Control
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="Escreva seu Email"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.cliente.email}
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
            cliente: { ...prevState.cliente, [name]: value }
        }));
        console.log(value);
    };
 
    handleSubmit = event => {
        console.log(`${process.env.REACT_APP_API_URL}`);
        fetch('https://clientebd.herokuapp.com/sistema/cliente', {
            method: "post",
            body: JSON.stringify(this.state.cliente),
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
 
export default novo;

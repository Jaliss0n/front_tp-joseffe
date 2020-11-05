import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import './deletarpedido.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 
class DeletarPedido extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            pedidos: {

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
 
    componentDidMount() {
        
        const { idPedido } = this.props.match.params;
        fetch(`${process.env.REACT_APP_API_URL}
        /sistema/pedidos/${idPedido}`)
            .then(data => {
                data.statusText().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ produto: data });
                    }
                });
            })
            .catch(erro => this.setState({ erro: erro }));
    }
 
    render() {
        const { redirect } = this.state;
        const {  pedidos, index } = this.state;
 
        if (redirect) {
            return <Redirect to="/pedidos" />;
        } else {
            return (
                <div className="box-danger">
                    
                    <Card border="danger" style={{ width: '18rem',height: '18rem' }}>
                    <Card.Header>Deletar</Card.Header>
                    <Card.Body>
                    <Card.Title>Tem certeza Que deseja deletar o pedido {pedidos.nomePedido} ?</Card.Title>
                    <Card.Text>
                        Está ação e definitiva e não poderá ser revertida ou alterada no futuro!
                    </Card.Text>
                    <Card.Link href="/pedidos"><Button variant="primary">Cancelar</Button></Card.Link>
                    <Card.Link href="/pedidos"><Button variant="danger" onClick={this.handleClick}>Deletar</Button></Card.Link>
                  

                    </Card.Body>
                    </Card>
                </div>
                
                
                /*<fieldset>
                    <legend>Deletar Usuário</legend>
                    <div className="usuario-delete">
                        <label htmlFor="nome">{this.state.cliente.nome} </label>
                        <p>Tem certeza que deseja deletar este registro?</p>
 
                        <button
                            onClick={this.handleClick}
                        >
                            Remover
                        </button>
                        <br /><br />
                        <Link to={`/clientes`}>Voltar</Link>
                    </div>
                </fieldset>*/
            );
        }
    }
 
    handleClick = event => {
        const { idPedido } = this.props.match.params;
 
        fetch(`${process.env.REACT_APP_API_URL}
        /sistema/pedidos/${idPedido}`, {
            method: "delete"
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.statusText().then(data => {
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
 
export default DeletarPedido;

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import './deletarProduto.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 
class DeletarProduto extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            produto: {

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
        const { idProduto } = this.props.match.params;
 
        fetch(`${process.env.REACT_APP_API_URL}
        /sistema/produtos/${idProduto}`)
            .then(data => {
                data.json().then(data => {
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
        const { produto, index } = this.state;
 
        if (redirect) {
            return <Redirect to="/produto" />;
        } else {
            return (
                <div className="box-danger">
                    
                    <Card border="danger" style={{ width: '18rem',height: '18rem' }}>
                    <Card.Header>Deletar</Card.Header>
                    <Card.Body>
                    <Card.Title>Tem certeza Que deseja deletar o usuario(a) {produto.nomeProduto} ?</Card.Title>
                    <Card.Text>
                        Está ação e definitiva e não poderá ser revertida ou alterada no futuro!
                    </Card.Text>
                    <Card.Link href="/produto"><Button variant="primary">Cancelar</Button></Card.Link>
                    <Card.Link href="/produto"><Button variant="danger" onClick={this.handleClick}>Deletar</Button></Card.Link>
                  

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
        const {  idProduto } = this.props.match.params;
 
        fetch(`${process.env.REACT_APP_API_URL}
        /sistema/produtos/${idProduto}`, {
            method: "delete"
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
 
export default DeletarProduto;

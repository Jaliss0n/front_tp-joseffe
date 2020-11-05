import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './editarProdutos.css';
import Form from 'react-bootstrap/Form';

 
class EditarProdutos extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            produto: {
                nomeProduto: "",
                precoCusto: "",
                precoVenda: "",
                qtdEstoque:"",
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
        const {  idProduto } = this.props.match.params;
 
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
 
        if (redirect) {
            return <Redirect to="/produto" />;
        } else {
            return (
                <div className ="formulario">
                    <Form onSubmit={this.handleSubmit} >
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="nomeProduto">Nome do Produto</Form.Label>
                                <Form.Control
                                type="text" 
                                id="nomeProduto" 
                                name="nomeProduto" 
                                placeholder="Escreva o nome do Produto"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.produto.nomeProduto}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="precoCusto">Preço de Custo</Form.Label>
                                <Form.Control
                                type="double" 
                                id="precoCusto" 
                                name="precoCusto" 
                                placeholder="Digite o preço de Custo"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.produto.precoCusto}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="precoVenda">preco de Venda</Form.Label>
                                <Form.Control
                                type="double" 
                                id="precoVenda" 
                                name="precoVenda" 
                                placeholder="Digite o preço de Venda"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.produto.precoVenda}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <Form className="clientes-insert">
                        <Form.Group controlId="formGroupNome">
                            <Form.Label htmlFor ="qtdEstoque">Quantidade do Estoque</Form.Label>
                                <Form.Control
                                type="double" 
                                id="qtdEstoque" 
                                name="qtdEstoque" 
                                placeholder="Digite a Qauntidade do Estoque"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.produto.qtdEstoque}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <br/>
                    <div className="btn-cadastrar">
                        <button type="submit" className="btn btn-warning">
                            Atualizar
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
            produto: { ...prevState.produto, [name]: value }
        }));
    };
 
    handleSubmit = event => {
        const { idProduto } = this.state.produto;
 
        fetch(`${process.env.REACT_APP_API_URL}
        /sistema/produtos/${idProduto}`, {
            method: "put",
            body: JSON.stringify(this.state.produto),
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
 
export default EditarProdutos;

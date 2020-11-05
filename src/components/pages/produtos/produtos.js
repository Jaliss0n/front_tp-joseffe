import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import './index.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./produtos.css"
 
export default class Produto extends Component{

    constructor(props) {
        super(props);
 
        this.state = {
            produto: [],
            erro: null
        };
    };
 
    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}
        /sistema/produtos`)
            .then(produto =>
                produto.json().then(produto => this.setState({ produto: produto }))
            )
            .catch(erro => this.setState({ erro }));
    };

    
    

    render() {

        const { produto:produto } = this.state;
 
        return (

            <div className="usuario-list">
                <Link to={`/novoProduto`}> <button type="button" class="btn btn-success">Novo</button> </Link>
                <br /><br />
 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Preço de Custo</th>
                            <th scope="col">Preço de Venda</th>
                            <th scope="col">Quantidade de Estoque</th>
                            <th scope="col">Ações</th>
                            <th scope="col"></th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {produto.map((produto, index) => (
                            <tr>
                                <th scope="row">{produto.idProduto}</th>
                                <td>{produto.nomeProduto}</td>
                                <td>{produto.precoCusto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td>{produto.precoVenda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td>{produto.qtdEstoque}</td>
                                <td> <Link to={`/detalheProduto/${produto.idProduto}`}> <button type="button" class="btn btn-primary">Detalhes</button> </Link> </td>
                                <td> <Link to={`/editarProduto/${produto.idProduto}`}> <button type="button" class="btn btn-warning">Editar</button> </Link></td>
                                <td> <Link to={`/deleteProduto/${produto.idProduto}`}> <button type="button" class="btn btn-danger">Excluir</button> </Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            )
    }
};



        
        


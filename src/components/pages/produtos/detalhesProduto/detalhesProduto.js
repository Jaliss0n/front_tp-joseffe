import React, { Component } from 'react';
import { Link } from "react-router-dom";
import'./detalhesProdutos.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

 
export default class DetalhesProduto extends Component {
    state = {
        produto: {},
    };

    
 
    componentDidMount() {
        const {idProduto } = this.props.match.params;
 
        fetch(`${process.env.REACT_APP_API_URL}
        /sistema/produtos/${idProduto}`)
            .then(produto =>
                produto.json().then(produto => this.setState({ produto: produto }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { produto: produto, index } = this.state;
 
        /*if (cliente.ativo) {
            cliente.ativo = "Usuário Ativo";
        } else {
            cliente.ativo = "Usuário Inativo";
        }*/
 
        return (
            <div className="usuario-info">
                
                
                <ListGroup variant="flush">
                <ListGroup.Item><h5>Nome: </h5>{produto.nomeProduto}</ListGroup.Item>
                <ListGroup.Item><h5>Preço de Custo: </h5>{produto.precoCusto}</ListGroup.Item>
                <ListGroup.Item><h5>Preço de venda: </h5>{produto.precoVenda}</ListGroup.Item>
                <ListGroup.Item><h5>Quantidade do estoque: </h5>{produto.qtdEstoque}</ListGroup.Item>
                <ListGroup.Item><h5>Criado em: </h5>{produto.createdAt}</ListGroup.Item>
                <ListGroup.Item><h5>Atualizado em: </h5>{produto.updateAt}</ListGroup.Item>
                
                </ListGroup>
                
                <br />
                <>
                <ButtonGroup size="sg" className="mb-2">
                <Button ><Link id="btn" to={`/produto`}><h4 id ="texto"> Voltar</h4></Link></Button>
                <Button ><Link id="btn" to={`/editarProduto/${produto.idProduto}`}><h4 id ="texto"> Editar</h4></Link></Button>
                <Button ><Link id="btn" to={`/deleteProduto/${produto.idProduto}`}><h4 id ="texto"> Deletar</h4></Link></Button>
             
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

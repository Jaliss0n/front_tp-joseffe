import React, { Component } from 'react';
import { Link } from "react-router-dom";
import'./detalhesPed.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

 
export default class DetalhesPed extends Component {
    state = {
        pedidos: {},
        cliente:{},
        produtos:{},

    };

    ///////////////////////////////////
    
    componentDidMount() {
        const {  idPedido } = this.props.match.params;
         fetch(`${process.env.REACT_APP_API_URL}
         /sistema/pedidos/${idPedido}`)
            .then( pedidos =>{
                //await console.log(pedidos.json());
                pedidos.json().then(pedido => {
                    fetch(`${process.env.REACT_APP_API_URL}
                    /sistema/cliente/${pedido.clienteId}`)
                        .then( cliente => { 
                            cliente.json().then(cliente => {
                                fetch(`${process.env.REACT_APP_API_URL}
                                /sistema/produtos/${pedido.produtoId}`)
                                    .then( produtos =>{
                                        produtos.json().then(produtos => {pedido.produtos = produtos; console.log(pedido); pedido.cliente = cliente; console.log(pedido); this.setState({ cliente: cliente }); this.setState({pedidos:pedido}); this.setState({ produtos: produtos });})
                                    }
                                        )
                                pedido.cliente = cliente; console.log(pedido); this.setState({ cliente: cliente }); this.setState({pedidos:pedido}); })
                            //pedidos.cliente = cliente;
                            
                        //pedidos.json().then(pedidos => this.setState({ pedidos: pedidos }));
                        }) 
                });
                     
            })
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { pedidos: pedidos, index, cliente:cliente, produtos:produtos } = this.state;

 
        /*if (cliente.ativo) {
            cliente.ativo = "Usuário Ativo";
        } else {
            cliente.ativo = "Usuário Inativo";
        }*/
 
        return (
            <div className="usuario-info">
                
                
                <ListGroup variant="flush">
                <ListGroup.Item><h5>Nome do Pedido: </h5>{pedidos.nomePedido}</ListGroup.Item>
                <ListGroup.Item><h5>Nome do Comprador: </h5>{cliente.nome}</ListGroup.Item>
                <ListGroup.Item><h5>Produto Comprado: </h5>{produtos.nomeProduto}</ListGroup.Item> 
                <ListGroup.Item><h5>Quantidade do estoque: </h5>{produtos.qtdEstoque}</ListGroup.Item>
                <ListGroup.Item><h5>Endereço: </h5>{cliente.end}</ListGroup.Item>
                <ListGroup.Item><h5>Telefone: </h5>{cliente.telefone}</ListGroup.Item>
                <ListGroup.Item><h5>Criado em: </h5>{pedidos.createdAt}</ListGroup.Item>
                <ListGroup.Item><h5>Atualizado em: </h5>{pedidos.updateAt}</ListGroup.Item>
                
                </ListGroup>
                
                <br />
                <>
                <ButtonGroup size="sg" className="mb-2">
                <Button ><Link id="btn" to={`/pedidos`}><h4 id ="texto"> Voltar</h4></Link></Button>
                <Button ><Link id="btn" to={`/deletarPedido/${pedidos.idPedido}`}><h4 id ="texto"> Deletar</h4></Link></Button>
             
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


    /*
    componentDidMount() {
        const {  idPedido } = this.props.match.params;

 
         fetch(`http://localhost:3003/sistema/pedidos/${idPedido}`)
            .then( pedidos =>{
                //await console.log(pedidos.json());
                pedidos.json().then(pedido => {
                    fetch(`http://localhost:3003/sistema/cliente/${idPedido}`)
                        .then( cliente => { 
                            cliente.json().then(cliente => {pedido.cliente = cliente; console.log(pedido); this.setState({ cliente: cliente }); this.setState({pedidos:pedido}); })
                            //pedidos.cliente = cliente;
                            
                        //pedidos.json().then(pedidos => this.setState({ pedidos: pedidos }));
                        }) 
                });
                     
            })
            .catch(erro => this.setState({ erro }));
    }
     */


     /*
        componentDidMount() {
        const {  idPedido } = this.props.match.params;
         fetch(`http://localhost:3003/sistema/pedidos/${idPedido}`)
            .then( pedidos =>{
                //await console.log(pedidos.json());
                pedidos.json().then(pedido => {
                    fetch(`http://localhost:3003/sistema/cliente/${clienteId}`)
                        .then( cliente => { 
                            cliente.json().then(cliente => {
                                fetch(`http://localhost:3003/sistema/produtos/${produtoId}`)
                                    .then( produtos =>{
                                        produtos.json().then(produtos => {pedido.produtos = produtos; console.log(pedido); pedido.cliente = cliente; console.log(pedido); this.setState({ cliente: cliente }); this.setState({pedidos:pedido}); this.setState({ produtos: produtos });})
                                    }
                                        )
                                pedido.cliente = cliente; console.log(pedido); this.setState({ cliente: cliente }); this.setState({pedidos:pedido}); })
                            //pedidos.cliente = cliente;
                            
                        //pedidos.json().then(pedidos => this.setState({ pedidos: pedidos }));
                        }) 
                });
                     
            })
            .catch(erro => this.setState({ erro }));
    }
     */
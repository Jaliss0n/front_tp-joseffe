import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cards from './components/cards/cards';
import React, { Component }  from 'react';
import Cliente from './components/pages/clientes/cliente';
import novo from './components/pages/clientes/novo/novo';
import Detalhes from'./components/pages/clientes/detalhes/detalhes';
import Deletar from './components/pages/clientes/delete/delete';
import Editar from './components/pages/clientes/editar/editar';
import Produto from './components/pages/produtos/produtos';
import novoProduto from './components/pages/produtos/novoProdutos/novoProdutos';
import EditarProdutos from './components/pages/produtos/editarProdutos/editarProdutos';
import DeletarProduto from './components/pages/produtos/deletarProduto/deletarProduto';
import DetalhesProduto from './components/pages/produtos/detalhesProduto/detalhesProduto';
import Pedidos from './components/pages/pedidos/pedidos';
import novoPedido from './components/pages/pedidos/novoPedido/novoPedido';
import DetalhesPed from './components/pages/pedidos/detalhesPedido/detalhesPed';
import DeletarPedido from'./components/pages/pedidos/deletarPedido/deletarpedido';
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Cards} />

                <Route path="/clientes" component={Cliente} />
                <Route path="/novo" component={novo} />
                <Route path="/cliente/:idCliente" component={Detalhes}/> 
                <Route path="/delete/:idCliente" component={Deletar}/>
                <Route path="/editar/:idCliente" component={Editar}/>

                <Route path="/produto" component={Produto}/>
                <Route path="/novoProduto" component={novoProduto}/>
                <Route path="/editarProduto/:idProduto" component={EditarProdutos}/>
                <Route path="/deleteProduto/:idProduto" component={DeletarProduto}/>
                <Route path="/detalheProduto/:idProduto" component={DetalhesProduto}/>

                <Route path="/pedidos" component={Pedidos}/>
                <Route path="/novoPedido" component={novoPedido}/>
                <Route path="/detalhesPed/:idPedido" component={DetalhesPed}/>
                <Route path="/deletarPedido/:idPedido" component={DeletarPedido}/>

                
            </Switch>        
        </BrowserRouter>
    );
};

 
export default Routes;

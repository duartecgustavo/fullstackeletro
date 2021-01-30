import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/index';

import less from '../../assets/cartModal/less.svg'
import pluss from '../../assets/cartModal/pluss.svg'
import React, { Component } from 'react'

const CartModal = () => {

    const  dispatch = useDispatch();
    const value = useSelector(state => state.cart.value)
    const produtos = useSelector(state => state.cart.Carts)

    let totalPreco= 0 ;
    for (let i = 0 ; i < produtos.length; i++){
        totalPreco += (produtos[i].preco*produtos[i].quantidade)
    }

    return (
        <>
            <div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cartModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Produto</th>
                                        <th scope="col">Qtd</th>
                                        <td></td>
                                        <th scope="col">Preço</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {produtos.map(produto => {
                                        const total = (produto.preco*produto.quantidade).toFixed(2)
                                        return(
                                            <tr>
                                                <td>
                                                <button onClick={() => dispatch(cartActions.Delete(value, produto))} className="badge rounded-pill bg-danger">Delete</button>
                                                </td>
                                                <td>{produto.name}</td>
                                                <td>{produto.quantidade}</td>
                                                <td>
                                                <button onClick={() => dispatch(cartActions.AddItem(value, produto))} className="badge rounded-pill bg-primary"><img src={less}/></button>
                                            <button onClick={() => dispatch(cartActions.Remove(value, produto))} className="badge rounded-pill bg-danger"><img src={pluss}/></button>
                                                </td>
                                                <td>R${produto.preco.toFixed(2)}</td>
                                                <td>R${total}</td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <th colSpan="4" scope="row">Total</th>
                                        <td>{value}</td>
                                        <td>R${totalPreco.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul>
                                {produtos.map(produto => {
                                    return(
                                        <li key={produto.id}>
                                            <button onClick={() => dispatch(cartActions.Delete(value, produto))} className="badge rounded-pill bg-danger">Delete</button>
                                            {produto.name} 
                                            {produto.quantidade} 
                                            <button onClick={() => dispatch(cartActions.AddItem(value, produto))} className="badge rounded-pill bg-primary"><img src={less}/></button>
                                            <button onClick={() => dispatch(cartActions.Remove(value, produto))} className="badge rounded-pill bg-danger"><img src={pluss}/></button>
                                        </li>
                                    )
                                })}
                            </ul>
                            Total de produtos {value}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartModal

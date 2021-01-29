import React, { Component } from 'react'
import { useSelector } from 'react-redux';
import CartModal from './cartModal'

const CartButton = () => {

    const value = useSelector(state => state.cart.value);

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cartModal">
                Cart {value}
            </button>
            <CartModal />
        </>
    )
}

export default CartButton

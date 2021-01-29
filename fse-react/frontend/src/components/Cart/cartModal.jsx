import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/index';

import React, { Component } from 'react'

const CartModal = () => {

    const  dispatch = useDispatch();
    const value = useSelector(state => state.cart.value)

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
                            Total de produtos {value}
                        </div>
                        <button className="btn btn-success" onClick={() => dispatch(cartActions.Add())}>Add</button>
                        <button className="btn btn-warning" onClick={() => dispatch(cartActions.Remove())}>Remove</button>
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

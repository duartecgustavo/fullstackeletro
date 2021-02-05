import React, { Component } from "react";
import { useSelector } from "react-redux";
import CartModal from "./cartModal";
import Carrinho from "../../assets/carrinho.svg"

const CartButton = () => {
  const value = useSelector((state) => state.cart.value);

  return (
    <>
      <button type="button" data-bs-toggle="modal" data-bs-target="#cartModal" className="col-1 d-flex align-items-center justify-content-center h-100 bg-addcarrinho border-carrinho">
        <img src={Carrinho} className="img-fluid w-50" alt="" /> - {value}
      </button>
      <CartModal />
    </>
  );
};

export default CartButton;

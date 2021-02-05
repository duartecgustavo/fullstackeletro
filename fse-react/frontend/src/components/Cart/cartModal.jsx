import { useSelector, useDispatch } from "react-redux";
import cartActions from "../store/actions/index";
import React, { Component } from "react";

import less from "../../assets/cartModal/less.png";
import pluss from "../../assets/cartModal/pluss.png";
import "./style.css";

const CartModal = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.cart.value);
  const produtos = useSelector((state) => state.cart.Carts);

  let totalPreco = 0;
  for (let i = 0; i < produtos.length; i++) {
    totalPreco += produtos[i].preco * produtos[i].quantidade;
  }

  return (
    <>
      <div
        className="modal fade"
        id="cartModal"
        tabindex="-1"
        aria-labelledby="cartModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-body-w">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cartModalLabel">
                Carrinho
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                x
              </button>
            </div>
            <div className="modal-body">
              <div>
                
                {produtos.map((produto) => {
                  const total = (produto.preco * produto.quantidade).toFixed(2);
                  return (
                    <div className="d-flex justify-content-around my-2">
                      <div className=" d-flex align-items-center">
                        <button
                          onClick={() =>
                            dispatch(cartActions.Delete(value, produto))
                          }
                          className="border badge bg-danger"
                        >
                          Delete
                        </button>
                      </div>
                      <div>
                        {produto.name}
                        <div className="d-flex justify-content-around align-items-center">
                          <a
                            onClick={() =>
                              dispatch(cartActions.AddItem(value, produto))
                            }
                            style={{cursor: "pointer"}}
                          >
                            <img
                              className="img-fluid"
                              src={pluss}
                              style={{ width: "18px" }}
                            />
                          </a>
                          <a
                            onClick={() =>
                              dispatch(cartActions.Remove(value, produto))
                            }
                            style={{cursor: "pointer"}}
                          >
                            <img
                              className="img-fluid"
                              src={less}
                              style={{ width: "18px" }}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        {produto.quantidade}
                      </div>
                      <div className=" d-flex align-items-center">
                        R${produto.preco.toFixed(2)}
                      </div>
                      <div className=" d-flex align-items-center">
                        R${total}
                      </div>
                    </div>
                  );
                })}
                <hr />
                <div className="d-flex justify-content-between">
                  <div className="d-flex ml-3">
                    <div className="mr-2">Total de produtos:</div>
                    <div>{value}</div>
                  </div>

                  <div className="d-flex mr-3">R${totalPreco.toFixed(2)}</div>
                </div>
              </div>

            </div>
            <div className="modal-footer d-flex align-items-center justify-content-between">
              <button
                type="button"
                className="btn btn-cancelar"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-confirmar">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;

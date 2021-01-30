const Add = (value, produto) => {
  return {
    type: "ADD_TO_CART",
    value,
    produto,
  };
};
const Remove = (value, produto) => {
  return {
    type: "REMOVE_TO_CART",
    value,
    produto,
  };
};

const AddItem = (value, produto) => {
  return {
    type: "ADD_ITEM",
    value,
    produto,
  };
};

const Delete = (value, produto) => {
  return {
    type: "DELETE",
    value,
    produto,
  };
};

export default {
  Add,
  Remove,
  AddItem,
  Delete
};

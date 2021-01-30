import produtos from './produtos';

const INITIAL_STATE = {
    value: 0,
    produtos,
    Carts: [],
    produtos_cart: []
}

export default function cart(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_TO_CART':
            console.log(action.produto)
            console.log(state.Carts)
            if (state.value === 0){
                let cart = {
                    id: action.produto.id_produto,
                    name: action.produto.categoria,
                    preco: action.produto.preco,
                    quantidade: 1
                }
                state.Carts.push(cart)
                console.log(cart.name)
            } 
            else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.id === action.produto.id_produto){
                        state.Carts[key].quantidade++;
                        check = true;
                    }
                })
                if(!check){
                    let cart = {
                        id: action.produto.id_produto,
                        name: action.produto.categoria,
                        preco: action.produto.preco,
                        quantidade: 1
                    }
                    state.Carts.push(cart)
                }
            }
            state.value = state.value + 1;
            return state;   


        case 'REMOVE_TO_CART':
            if(action.produto.quantidade > 1){
                action.produto.quantidade--;
                state.value = state.value - 1;
            }
            return state;
        case 'ADD_ITEM':
            action.produto.quantidade++;
            state.value = state.value + 1;
            return state;   
        case 'DELETE':
            return{
                ...state,
                value: (action.value - action.produto.quantidade),
                Carts: state.Carts.filter(item => {
                    return item.id !== action.produto.id;
                })
            }
        default:
            return state;
    }   
}
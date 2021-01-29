import { combineReducers } from 'redux';
import cart from './cart';
import produto from './produto';

export default combineReducers({
    cart,
    produto,
});
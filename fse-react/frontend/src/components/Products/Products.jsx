import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/index';

const Products = () => {

    const dispatch = useDispatch();
    const value = useSelector(state => state.cart.value)

    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{backgroundColor:"white"}}>
            <p>
                Nome do Produto
            </p>
            <p>
                Preço
            </p>
            <button onClick={() => dispatch(cartActions.Add())}>Add</button>
            <button onClick={() => dispatch(cartActions.Remove())}>Remove</button>
            <p>{value}</p>
        </div>
    )
}

export default Products;
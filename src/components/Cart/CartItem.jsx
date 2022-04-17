
import { useDispatch } from 'react-redux';
import { IoIosArrowBack , IoIosArrowForward } from 'react-icons/io'
import { addProduct , removeProduct, clearItemFromCart } from '../../features/Cart';
import './CartItem.scss';

function CartItem({ cartItem}) {

const dispatch = useDispatch();


const addHandler = () => {
    dispatch(addProduct(cartItem))
}

const removeHandler = () => {
    dispatch(removeProduct(cartItem))
}

const clearItem = () => {
    
    dispatch(clearItemFromCart(cartItem))
}

  return (
    <div className="cart-item">
        <div className="cart-item-detail">
            <img src={cartItem.imageUrl} alt="" width="90%" height="150px" />
        </div>
        <div className="cart-item-detail">
            <h5>{cartItem.name}</h5>
        </div>
        <div className="cart-item-detail" style={{ display: "flex", paddingLeft: "4px" , alignItems: "center"}}>
            <span onClick={removeHandler}>{ <IoIosArrowBack />}</span>
            <h5>{cartItem.quantity}</h5>
            <span onClick={addHandler}>{ <IoIosArrowForward />}</span>
        </div>
        <div className="cart-item-detail">
            <h5>{cartItem.price}$</h5>
        </div>
        <span className='remove' onClick={clearItem}>X</span>
    </div>
  )
}

export default CartItem;

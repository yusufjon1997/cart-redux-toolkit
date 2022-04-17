
import { useDispatch , useSelector } from 'react-redux';
import { addProduct } from '../../features/Cart';
import './Product.scss';

function Product({ product}) {
const { name , imageUrl , price } = product;

const dispatch = useDispatch();

const addToCart = () => dispatch(addProduct(product))


return (
    <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}$</span>
        </div>
        <button onClick={addToCart}>Add to Card</button>
    </div>
  )
}

export default Product
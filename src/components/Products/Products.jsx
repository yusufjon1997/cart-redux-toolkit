
import Product from './Product';
import products from '../../shop-data.json';
import './Products.scss';
 
function Products() {

  return (
    <div className="products-container">
        { products.map( product => (<Product key={product.id} product={product} />)
        )}
    </div>
  )
}

export default Products;
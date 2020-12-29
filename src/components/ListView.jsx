import ShopItem from './ShopItem'; 
import PropTypes from 'prop-types';

const ListView = ({products}) => {
  return (
    <div className="ListView">
    {products.map(product => (
      <ShopItem key={`${product.name} ${product.color}`} {...product}/>
    ))}
    </div>
  )
};

ListView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }))
};

export default ListView;

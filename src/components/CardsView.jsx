import ShopCard from './ShopCard';
import PropTypes from 'prop-types';

const CardsView = ({products}) => {
  return (
    <div className="CardsView">
    {products.map(product => (
      <ShopCard key={`${product.name} ${product.color}`} {...product}/>
    ))}
    </div>
  )
};

CardsView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }))
};

export default CardsView;
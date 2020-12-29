import PropTypes from 'prop-types';

const ShopItem = ({name, price, color, img}) => {
  return (
    <div className='ShopItem'>
    <img className='Picture' src={img} alt={`${name} ${color}`} />
    <h2 className='Name'>{name}</h2>
    <p className='Color'>{color}</p>
    <p className='Price'>${price}</p>
    <button className='Button_Buy'>ADD TO CART</button>
  </div>
  )
};

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ShopItem;
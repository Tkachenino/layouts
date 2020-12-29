import PropTypes from 'prop-types';

const ShopCard = ({name, price, color, img}) => {
  return (
    <div className='ShopCard'>
      <h2 className='Name'>{name}</h2>
      <p className='Color'>{color}</p>
      <img className='Picture' src={img} alt={`${name} ${color}`} />
      <div className='PriceWrapper'>
        <p className='Price'>${price}</p>
        <button className='Button_Buy'>ADD TO CART</button>
      </div>
    </div>
  )
};

ShopCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ShopCard;
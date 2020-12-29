import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';

const IconSwitch = ({icon, onSwitch}) => {
  return (
    <Icon onClick={() => onSwitch(icon)}>
      {icon}
    </Icon>
  )
};

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
};

export default IconSwitch;
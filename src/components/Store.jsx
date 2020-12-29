import {useState} from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}]

const Store = () => {
  const [layout, setLayout] = useState({component: "CardsView", icon: "view_list"});

  const ItemVuew = (props) => {
    return layout.component === 'CardsView' 
    ? <CardsView products={props} />
    : <ListView products={props}/>
  };

  const changeLayout = (layout) => {
      const newLayout = layout === 'view_module' 
      ? {component: "CardsView", icon: "view_list"} 
      : {component: "ListView", icon: "view_module"};
      setLayout(newLayout)
  };

  return (
    <>
    <header className="Header">
      <IconSwitch  icon={layout.icon} onSwitch={(layout) => changeLayout(layout)}/>
    </header>
    {ItemVuew(products)}
    </>
  )
};

export default Store;
import React, { useState, useEffect } from 'react';

import { Menu, Info } from './components';
import './App.css';

// const Emoji = props => (
//   <p
//     className="react-site"
//     role="img"
//     aria-label={props.label ? props.label : ""}
//     aria-hidden={props.label ? "false" : "true"}
//     value={props.label}
//   >
//     <i>Desenvolvido com</i> {props.symbol}
//   </p>
// )

const App = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(document.querySelectorAll('.menu-options a'));
  }, []);

  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      const element = event.target;
      const id = element.getAttribute('href');
      const to = document.querySelector(id).offsetTop;
      console.log(id.height);

      window.scroll({
        top: to - 15,
        behavior: 'smooth',
      });
    });
  });

  return (
    <div className="main-container">
      <Menu />
      <Info />
      {/* <Emoji symbol="&#10084;&#65039;" /> */}
    </div>
  );
};

export default App;

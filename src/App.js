import React, { useState, useEffect } from 'react';

import { Menu, Info, Loading } from './components';
import './App.css';

const Emoji = props => (
  <p
    className="react-site"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    value={props.label}
  >
    <i>Desenvolvido com React</i>
    <br />
    <i>Feito com </i>{props.symbol}
  </p>
)

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [viewLoading, setViewLoading] = useState('view-loading');

  useEffect(() => {
    setMenuItems(document.querySelectorAll('.menu-options a'));
    window.addEventListener('load', () => {
      setViewLoading('view-loading-none');
    });
  }, []);

  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      const element = event.target;
      const id = element.getAttribute('href');
      const to = document.querySelector(id).offsetTop;

      window.scroll({
        top: to - 15,
        behavior: 'smooth',
      });
    });
  });

  return (
    <>
      <Loading classes={viewLoading} />
      <div className="main-container">
        <Menu />
        <Info />
      </div>
      <Emoji symbol="&#10084;&#65039;" />
    </>
  );
};

export default App;

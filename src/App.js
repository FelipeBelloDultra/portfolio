import React, { useState, useEffect } from 'react';

import { Menu, Info, Emoji, FloatWhatsapp } from './components';
import './App.css';

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showOnLoad, setShowOnLoad] = useState('transform-left');
  const [showRightOnLoad, setShowRightOnLoad] = useState('transform-right');

  useEffect(() => {
    setMenuItems(document.querySelectorAll('.menu-options a'));
    window.addEventListener('load', () => {
      setShowOnLoad(' ');
      setShowRightOnLoad(' ');
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
      <div className="main-container">
        <Menu />
        <Info showOnLoad={showOnLoad} />
      </div>
      <FloatWhatsapp showRightOnLoad={showRightOnLoad} />
      <Emoji symbol="&#10084;&#65039;" showOnLoad={showOnLoad} />
    </>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

import { Menu, Info, Emoji, FloatWhatsapp } from './components';
import './App.css';

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showOnLoad, setShowOnLoad] = useState('transform-left');
  const [showRightOnLoad, setShowRightOnLoad] = useState('transform-right');
  const [showOpacityOnLoad, setShowOpacityOnLoad] = useState('opacity-null');

  useEffect(() => {
    setMenuItems(document.querySelectorAll('.menu-options a'));
  }, []);

  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      const element = event.target;
      const id = element.getAttribute('href');
      const to = document.querySelector(id).offsetTop;

      window.scroll({
        top: to - 30,
        behavior: 'smooth',
      });
    });
  });

  setTimeout(() => {
    setShowOnLoad(' ');
    setShowRightOnLoad(' ');
    setShowOpacityOnLoad(' ');
  }, 300);

  // window.onscroll = () => {
  //   console.log(document.documentElement.clientHeight)
  // };

  return (
    <>
      <div className="main-container">
        <Menu showOpacityOnLoad={showOpacityOnLoad} />
        <Info
          showOnLoad={showOnLoad}
          showRightOnLoad={showRightOnLoad}
          showOpacityOnLoad={showOpacityOnLoad}
        />
      </div>
      <FloatWhatsapp showRightOnLoad={showRightOnLoad} />
      <Emoji symbol="&#10084;&#65039;" showOnLoad={showOnLoad} />
    </>
  );
};

export default App;

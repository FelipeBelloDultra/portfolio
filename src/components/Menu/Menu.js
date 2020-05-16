import React, { memo } from 'react';

import profile from '../../assets/profile.jpg'
import './styles.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="content-menu">
        <img src={profile} className="img" alt="Profile" />
        <div className="menu-options">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#proejtos">Projetos</a>
            </li>
            <li>
              <a href="#contatos">Contatos</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(Menu);

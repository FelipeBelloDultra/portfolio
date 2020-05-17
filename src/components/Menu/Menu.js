import React, { memo } from 'react';

import profile from '../../assets/profile.jpg'
import './styles.css';

const Menu = (props) => {
  const menuOptions = [
    {
      href: '#home',
      title: 'Home',
    },
    {
      href: '#sobre',
      title: 'Sobre',
    },
    {
      href: '#habilidade',
      title: 'Habilidades',
    },
    {
      href: '#contato',
      title: 'Contato',
    }
  ]

  return (
    <div className="menu">
      <div className="content-menu">
        <img src={profile} className={`img ${props.showOpacityOnLoad}`} alt="Profile" />
        <div className={`menu-options ${props.showOpacityOnLoad}`}>
          <ul>
            {menuOptions.map((option, i) => (
              <li key={i}>
                <a href={option.href}>{option.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(Menu);

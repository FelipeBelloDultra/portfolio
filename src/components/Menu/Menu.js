import React, { memo } from 'react';

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

  const profile = 'https://media-exp1.licdn.com/dms/image/C4D03AQHKbb1IyIlMIw/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=MuhmjX3TZOGQ0x4kXVutHFqIJFBBHEzZaoL5Q-wLFxw';

  return (
    <div className="menu">
      <div className="content-menu">
        <img
          src={profile}
          className={`img ${props.showOpacityOnLoad}`}
          alt="Foto de Perfil"
        />
        <div
          className={`menu-options
          ${props.showOpacityOnLoad}`}
        >
          <ul className="d-sm-block">
            {menuOptions.map((option, i) => (
              <li key={i}>
                <a href={option.href}>{option.title}</a>
              </li>
            ))}
          </ul>
          <ul className="d-sm-none">
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

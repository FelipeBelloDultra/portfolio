import React from 'react';

import './styles.css';

const Home = (props) => {
  return (
    <div className={`home-content ${props.showOnLoad}`}>
      <p className="home-name">Felipe Bello Dultra</p>
      <p className="home-description">Olá, seja <b>bem-vindo ao meu site pessoal.</b> <br /> Desenvolvido com o <b>intuito de me apresentar para a comunidade</b> de desevolvimento de software <b>e mostrar</b> um pouco dos meus <b>projetos</b> pessoais e profissionais <b>que já fiz ou participei.</b></p>
    </div>
  );
};

export default Home;

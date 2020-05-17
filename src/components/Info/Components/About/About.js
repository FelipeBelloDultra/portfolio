import React from 'react';

import './styles.css';

const About = (props) => {
  return (
    <div className="about-content">
      <p className={`about-introduction ${props.showOpacityOnLoad}`}>
        Felipe, 18 anos, interior de São Paulo (Ibitinga), amante de tecnologia e apaixonado por programação e resolver problemas (com foco em desenvolvimento Web e Mobile).
      </p>
      <div className="about-card">
        <div className={`about-cards ${props.showRightOnLoad}`}>
          <h3><span>{'<'} Ensino Médio -</span> COMPLETO <span>{'/>'}</span></h3>
          <p>Formação - 2019</p>
        </div>
        <div className={`about-cards ${props.showOnLoad}`}>
          <h3><span>{'<'} Técnico em informárica -</span> COMPLETO <span>{'/>'}</span></h3>
          <p>Etec Vereador e Vice Prefeito Sergio da Fonseca (Ibitinga, SP)</p>
          <p>Formação - 2018 ~ 2019</p>
        </div>
        <div className={`about-cards ${props.showRightOnLoad}`}>
          <h3><span>{'<'} Desenvolvimento de sistemas -</span> CURSANDO <span>{'/>'}</span></h3>
          <p>Etec Vereador e Vice Prefeito Sergio da Fonseca (Ibitinga, SP)</p>
          <p>Termino previsto para - 2020</p>
        </div>
      </div>
    </div>
  );
};

export default About;

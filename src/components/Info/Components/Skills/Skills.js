import React, { memo } from 'react';

import { Conhecimentos, ConhecimentosModerados } from './components';
import { skills } from './lib/skills';
import './styles.css';

const Skills = (props) => {
  return (
    <div className="skills-content">
      <div className={`ability-container ${props.showRightOnLoad}`}>
        <h2>{'< '}<span>Conhecimentos:</span> /></h2>
        <div className="ability">
          <Conhecimentos
            skills={skills}
          />
        </div>
      </div>
      <div className={`ability-container ${props.showOnLoad}`}>
        <h2>{'< '}<span>Conhecimentos Moderados:</span> /></h2>
        <div className="ability">
          <ConhecimentosModerados
            skills={skills}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Skills);

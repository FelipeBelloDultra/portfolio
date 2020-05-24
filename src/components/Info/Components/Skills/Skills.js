import React, { memo } from 'react';

import { moderateSkills, skills } from './lib/skills';
import './styles.css';

const Skills = (props) => {
  return (
    <div className="skills-content">
      <div className={`ability-container ${props.showRightOnLoad}`}>
        <h2>{'< '}<span>Conhecimentos:</span> /></h2>
        <div className="ability">
          {skills.map((skill, i) => (
            <div key={i} className="ability-skills">
              {/* <img src={skill.img} alt={skill.name} /> */}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`ability-container ${props.showOnLoad}`}>
        <h2>{'< '}<span>Conhecimentos Moderados:</span> /></h2>
        <div className="ability">
          {moderateSkills.map((skill, i) => (
            <div key={i} className="ability-skills">
              {/* <img src={skill.img} alt={skill.name} /> */}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Skills);

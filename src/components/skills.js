import React from 'react';

const Skills = () => {
    const skills = [
        'HTML', // 0
        'CSS',  //1
        'JS',  //2
        'React', //3
        'Docker',
        'CI/CD'
    ];
    
    return (
        <section id="skills">
            <h2>Habilidades</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;




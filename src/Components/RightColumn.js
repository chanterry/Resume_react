import React from 'react';
import './RightColumn.css';
import Projects from './Projects';
import DataProjects from '../Data/ProjectsData';
import Experiences from './Experiences';
import DataExperiencesPro from '../Data/ExperiencesProData';

const RightColumn = () => {
    return(
        <div className='RightColumn'>
            <Projects data={DataProjects}/>
            <Experiences data2={DataExperiencesPro}/>
        </div>
    )
}

export default RightColumn;
import React from 'react';
import './LeftColumn.css';
import Education from './Education';
import DataEducation from '../Data/EducationData';
import Technologies from './Technologies';
import DataTechnologies from '../Data/TechnologiesData'
import Skills from './Skills';
import {DataSkills, DataSkills2} from '../Data/SkillsData';
import Languages from './Languages';
import Hobbies from './Hobbies';

const LeftColumn = () => {
    return (
        <>
            <div className='LeftColumn'>
                <Education data={DataEducation} />
                <Technologies data2={DataTechnologies} />
                <Skills data3={DataSkills} data4={DataSkills2} />
                <Languages />
                <Hobbies/>
            </div>
        </>
    )
}

export default LeftColumn;
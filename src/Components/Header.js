import React from 'react';
import './Header.css';
import DarkMode from './DarkMode';
import { MapPinIcon, EnvelopeOIcon, MobilePhoneIcon, LinkedinIcon, GithubIcon } from 'react-line-awesome';
import Portrait from '../Img/photo_CV.jpg';

const Header = () => {

    return (
    <div id='header_bg' className='header_bg_light'>
        <div className='header_grid'>
            <div className='photo'>
                <img 
                    src={Portrait} 
                    alt='portrait'       
                    style={{ 
                        height: '200px',
                        borderRadius: '50%',
                    }}>
                </img>
               <h1> Terry Chan</h1>
            </div>

            <div className='infos'>
                <h2 className='header_title'>Développeur Web Front-End</h2>
                <div className='coordonnees_spacing'>
                    <div className='coordonnees'>
                        <MapPinIcon />
                        <p className='adress'>Région de Paris</p>
                    </div>
                    <div className='coordonnees'>
                        <EnvelopeOIcon />
                        <a href='mailto:chanterry85@gmail.com'className='email'> chanterry85@gmail.com</a>
                    </div>
                    <div className='coordonnees'>
                        <MobilePhoneIcon />
                        <a href='tel:+33617340173' className='phone'> 06.17.34.01.73</a>
                    </div>
                    <div className='coordonnees'>
                        <LinkedinIcon />
                        <a href='https://www.linkedin.com/in/terrychan-paris/' target="_blank" className='linkedin_account' rel="noopener noreferrer"> terrychan-paris</a>
                    </div>
                    <div className='coordonnees'>
                        <GithubIcon />
                        <a href='https://github.com/terryaki75' target="_blank" className='github_account' rel="noopener noreferrer"> github.com/chanterry</a>
                    </div>
                </div>
            </div>
            <div className='options'>
                <DarkMode />
            </div>
        </div>
    </div>
    )
}

export default Header;
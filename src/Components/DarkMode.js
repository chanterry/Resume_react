import React from "react";
import { useState } from "react";
import './DarkMode.css';
import { AdjustIcon } from 'react-line-awesome';
import PDF from './PDF'
import PDFDark from './PDFDark'

function DarkMode() {

    const [mode, setMode] = useState (true);

    const handleClick = () => {
        const body = document.body
        let changeClassNameheaderBG = document.getElementById('header_bg')

        if (body.classList.contains ('dark')){
            body.classList.add('light')
            body.classList.remove('dark')
        } else if (body.classList.contains ('light')){
            body.classList.add('dark')
            body.classList.remove('light')
        }
        setMode (!mode);

        if (changeClassNameheaderBG.classList.contains ('header_bg_dark')){
            changeClassNameheaderBG.classList.add('header_bg_light')
            changeClassNameheaderBG.classList.remove('header_bg_dark')
        } else if (changeClassNameheaderBG.classList.contains ('header_bg_light')){
            changeClassNameheaderBG.classList.add('header_bg_dark')
            changeClassNameheaderBG.classList.remove('header_bg_light')
        }        
    }

    return (
        <>
            <div className="options_alignment">
                <button
                    className= {mode ? 'darkmode' : 'lightmode'} 
                    onClick={handleClick}
                >
                    {mode ? <AdjustIcon/> : <AdjustIcon/>}
                </button>

                {mode ? <PDF/> : <PDFDark/>}
            </div>
        </>
    )
}

export default DarkMode;
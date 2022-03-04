import React from "react";
import { HeartOIcon } from 'react-line-awesome';

const Hobbies = () => {

    return(
        <div>
            <h2 className="titles"><HeartOIcon/> Centre d'intérêts</h2><hr></hr>
            <div className="hobbies">
                <i class="fa-regular fa-chess-board fa-3x" style={{fontWeight: '900'}}></i>
                <i class="fa-brands fa-bitcoin fa-3x"></i>
                <i class="fa-solid fa-utensils fa-3x"></i>
                <i class="fa-regular fa-person-running fa-3x" style={{fontWeight: '900'}}></i>
            </div>
        </div>
    )
}

export default Hobbies;
import React from "react";
import { CommentIcon } from 'react-line-awesome';
import French from '../Img/france.png'
import English from '../Img/united-states.png'
import Cantonese from '../Img/hong-kong.png'

function Languages (){

    return(
        <div>
            <h2 className="titles"><CommentIcon/> Langues Parlées</h2><hr></hr>
            <div className="languages">
                <img src={French} alt="french"></img>
                <img src={English} alt="english"></img>
                <img src={Cantonese} alt="cantonese"></img>
            </div>
        </div>
    )
}

export default Languages;
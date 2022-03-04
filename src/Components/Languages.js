import React from "react";
import { CommentIcon } from 'react-line-awesome';

function Languages (){

    return(
        <div>
            <h2 className="titles"><CommentIcon/> Langues Parlées</h2><hr></hr>
            <div className="languages">
                <img src='./img/france.png' alt="french"></img>
                <img src='./img/united-states.png' alt="english"></img>
                <img src='./img/hong-kong.png' alt="cantonese"></img>
            </div>
        </div>
    )
}

export default Languages;
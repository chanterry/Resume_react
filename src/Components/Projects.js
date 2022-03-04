import React from "react";
import { FileCodeOIcon } from 'react-line-awesome';

function Projects ({data}){

    return(
        <div>
            <h2 className="titles"><FileCodeOIcon /> Projets</h2><hr></hr>
                {data.map((item) =>
                    <div className='spacing_title_h3' key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description} :</p>
                        <p>{item.link}</p>
                        <ul>
                            <li>{item.tools}</li>
                        </ul>
                    </div>
                )}
        </div>
    )
}

export default Projects;
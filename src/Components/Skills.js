import React from "react";
import { LightbulbOIcon } from 'react-line-awesome';

function Skills({data3 ,data4}){
    return(
        <>
            <div>
                <h2  className="titles"><LightbulbOIcon /> Compétences</h2><hr></hr>
                    <div className="grid_container skills">
                        {data3.map((item) =>
                            <ul key={item.id}>
                                <li>
                                    {item.skills}
                                </li>
                            </ul>
                        )}
                        {data4.map((item) =>
                            <ul key={item.id}>
                                <li>
                                    {item.skills}
                                </li>
                            </ul>
                        )}
                    </div>
            </div>
        </>
    )
}

export default Skills;
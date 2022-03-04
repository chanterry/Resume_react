import React from 'react';
import { GraduationCapIcon } from 'react-line-awesome';

function Education ({data}) {

    return(
        <div>
            <h2 className="titles"><GraduationCapIcon /> Diplômes et Formation</h2><hr></hr>

                {data.map((item) =>
                    <div className='education' key={item.id}>
                        <h3>{item.degree} | ({item.year})</h3>
                        <p>{item.school} | {item.location}</p>
                    </div>
                )}

                {/*Object.keys(data).map((item, i) => 
                    <div className='education' key={i}>
                        <h3>{data[item].degree} | ({data[item].year})</h3>
                        <p>{data[item].school} | {data[item].location}</p>
                    </div>                
                )*/}
        </div>
    )
}

export default Education;
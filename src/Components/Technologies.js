import React from "react";
import { LaptopIcon  } from 'react-line-awesome';

function Technologies (/*{data2}*/) {
    //console.log(data2)
    //console.log(Object.keys(data2))
    return(
        <div>
            <h2  className="titles"><LaptopIcon /> Informatique</h2><hr></hr>
                <div>
                    <div className="technologies">
                        <i class="fa-brands fa-html5 fa-3x col-4"></i>
                        <i class="fa-brands fa-css3-alt fa-3x col-4"></i>
                        <i class="fa-brands fa-bootstrap fa-3x col-4"></i>
                    </div>
                    <div className="technologies">
                        <i class="fa-brands fa-js fa-3x"></i>
                        <i class="fa-brands fa-react fa-3x"></i>
                        <i class="fa-brands fa-npm fa-3x"></i>
                    </div>
                    <div className="technologies">
                        <i class="fa-brands fa-php fa-3x"></i>
                        <i class="fa-solid fa-database fa-3x"></i>
                        <i class="fa-brands fa-symfony fa-3x"></i>
                    </div>
                </div>
                
                {/*Object.keys(data).map((item, i) => 
                    <div className='education' key={i}>
                        <h3>{data[item].degree} | ({data[item].year})</h3>
                        <p>{data[item].school} | {data[item].location}</p>
                    </div>                
                )*/}
        </div>
    )
}

export default Technologies; 
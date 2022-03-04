import React from "react";
import { BriefcaseIcon } from 'react-line-awesome';

function Experiences ({data2}) {
    return (
        <>
        <div>
            <h2 className="titles"><BriefcaseIcon /> Expériences</h2><hr></hr>
                <>
            {data2.map((item) => 
                <div key={item.id}>
                    <h3 className='spacing_title_h3'>{item.title} ({item.date})</h3>  
                    <ul className="spacing_bulletpoints">
                        {item.position.map((mission) => 
                            <li className="experiences_title" key={mission.id}>{mission.title}
                            <p className="experiences_title2">{mission.company} | {mission.location}</p></li>
                        )}
                    </ul>   
                </div>
            )}</>
        
            <h3 className='spacing_title_h3'>Autres expériences :</h3>
            <p className='other_experiences'> Responsable de salle (Restaurant étoilé Yoshinori), Commis de cuisine (Restaurant Orient Extrême Neuilly), Ambassadeur de Marque (Foodetective), Assistant de direction, Assistant RP (Agence Kingcom), Assistant Marketing (Affinity Media).</p>
        </div>
        </>
    )
}

export default Experiences;
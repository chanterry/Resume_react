import React from "react";
import PDF_CV from '../Img/CV_TC.pdf';

function PDF() {


    return(
        <div>
            <a  href={PDF_CV} target="_blank" rel="noreferrer" ><i className="fas fa-file-pdf fa-xl pdf_icon"></i></a>
        </div>
    )
}

export default PDF;
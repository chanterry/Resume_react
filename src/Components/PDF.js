import React from "react";

function PDF() {

    const PDF_CV = "./img/CV_TC.pdf";

    return(
        <div>
            <a  href={PDF_CV} target="_blank" rel="noreferrer" ><i class="fa-solid fa-file-pdf fa-xl"></i></a>
        </div>
    )
}

export default PDF;
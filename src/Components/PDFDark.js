import React from "react";
import PDF_CV_Dark from '../Img/CV_TC_Dark.pdf';

function PDFDark() {

    return(
        <div>
            <a href={PDF_CV_Dark} target="_blank" rel="noreferrer" ><i class="fa-solid fa-file-pdf fa-xl"></i></a>
        </div>
    )
}

export default PDFDark;
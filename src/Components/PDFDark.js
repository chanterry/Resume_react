import React from "react";

function PDFDark() {

    const PDF_CV_Dark = "./img/CV_TC_Dark.pdf";

    return(
        <div>
            <a href={PDF_CV_Dark} target="_blank" rel="noreferrer" ><i class="fa-solid fa-file-pdf fa-xl"></i></a>
        </div>
    )
}

export default PDFDark;
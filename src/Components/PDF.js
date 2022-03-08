import React from "react";

function PDF() {

    const PDFlink = "../File/CV_TV.pdf";

    return(
        <div>
            <a className="print_pdf" href={PDFlink} target="_blank"><i class="fa-solid fa-file-pdf fa-xl"></i></a>
        </div>



    
    )
}

export default PDF;
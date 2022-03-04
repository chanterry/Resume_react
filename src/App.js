import React from 'react';
import './App.css';
import Header from './Components/Header';
import LeftColumn from './Components/LeftColumn';
import RightColumn from './Components/RightColumn';
// import { Preview, print } from 'react-html2pdf';

function App() {

  /*const generateCV = () => {
    let cvTemplate = document.getElementById('cv_pdf')
    cvTemplate.setAttribute ('style', 'width:210mm !important')
    cvTemplate.classList.add('cv_print')
    document.body.classList.remove('dark')
    setTimeout(() => {
      print('cv', 'cv_pdf')
      cvTemplate.setAttribute ('style', 'width:100% !important')
      cvTemplate.classList.remove('cv_print')
    }, 300)
  }*/
  /*<Preview id={'cv_pdf'} ></Preview> <button onClick={generateCV}> PDF</button>*/

  return (
    <div className="App">
      <Header/>
      <div className="grid_container">
        <div className="left_column">
          <LeftColumn/>
        </div>
        <div className="right_column">
          <RightColumn/>
        </div>
      </div>
    </div>
  );

}

export default App;
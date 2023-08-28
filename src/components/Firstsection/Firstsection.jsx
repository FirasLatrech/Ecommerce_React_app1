import React from 'react';
import "./Firstsection.css"
import girlimage from "./assets/image/technology 1.png";
import epsilo_n1 from "./assets/image/Ellipse 25.svg";
import epsilo_n2 from "./assets/image/Ellipse 26.svg";

const Firstsection = () => {
  return (
    <div className='mainContainer'>
      <div className='textContinuer'>
        <h5>SUMMER 2020</h5>
        <h1>
        NEW COLLECTION
        </h1>
        <h4>We know how large objects will act, 
but things on a small scale.</h4>
<button>SHOP NOW</button>

      </div>
      <div className="imageContinuer">
        <div className='bicycle'>
          
        </div>
        <img src={girlimage} alt="" className='girl'/>

        <img src={epsilo_n1} alt=""  className='cercl1'/>
        <svg className='cercle3' xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
  <circle cx="40.1343" cy="40.3132" r="39.9615" fill="white"/>
  
</svg>

<img src={epsilo_n1} alt=""  className='circle4'/>



      </div>


      
    </div>
  );
}

export default Firstsection;

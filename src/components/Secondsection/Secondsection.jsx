import React from 'react';
import "./Secondsection.css"
import men from "./assets/image/filter.png";
import women from "./assets/image/women.png";
import accessories from "./assets/image/accessories.png";
import kids from "./assets/image/kids.png";



const Secondsection = () => {
  return (
    <div className='mainSection'>
      <div className='textContainerSecondSection'>
      <h2>EDITOR’S PICK</h2>
      <p>Problems trying to resolve the conflict between </p>
      </div>
      <div className="imageContainer">
        <div className="men">
          <img src={men} alt="" />
          <button>MEN</button>
        </div>
        <div className="women">
        

        <img src={women} alt="" />
        <button>WOMEN</button>

        </div>
        <div className="ACCESSORIESANDKIDS">

        <img src={accessories} alt=""  className='accessories'/>
        <button className='accessoriesbutton'>ACCESSORIES</button>



        
        <img src={kids} alt="" />
        <button className='kid'>KIDS</button>



        </div>

      </div>

      
    </div>
  );
}

export default Secondsection;

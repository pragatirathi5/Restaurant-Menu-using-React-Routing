import React, { useState } from 'react';
import Info from './Info';
import { FaRupeeSign } from 'react-icons/fa';

  const All = () => {
  const [state, setState] = useState(Info); 
  
  const allHandler = () => {
  alert('Kindly fill the enquiry form at the bottom of the page')
  }
  console.log(allHandler);

  return (
 <div className='container'>
   {
    state.map((item) =>
    <main key = {item.id} className="food">
    <div> 
    <img src={item.image} alt ={item.name} className='img'/>
    </div> 
    <div className='para'>
    <h3 onClick={allHandler}>{item.name}</h3>
    <p><FaRupeeSign />{item.price}</p> 
    </div> 
    </main>
     )
   }
 </div>
  );
}

export default All;
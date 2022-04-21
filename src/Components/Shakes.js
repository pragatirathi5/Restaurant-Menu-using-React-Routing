import React, { useState } from 'react';
import { FaRupeeSign } from 'react-icons/fa'

const Shakes = () => {
const [sstate, setSstate]=useState(
 [
   {
 id: 17,
 name: 'Strawberry Shake',
 price: 80,
 image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F06%2F07%2FGetAttachmentThumbnail-2.jpg&q=60'
 },

 {
 id: 18,
 name: 'Cream Shake',
 price: 110,
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-AaU-xWlyLuxtdpQ4l_B9EVmYeBtMAP1KA&usqp=CAU'
 },

 {
 id: 19,
 name: 'Peanut Shake',
 price: 90,
 image: 'https://shewearsmanyhats.com/wp-content/uploads/2014/07/chocolate-peanut-butter-milkshake-1.jpg'
 },

 {
 id: 20,
 name: 'Chocolate Shake',
 price: 140,
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLTwUZjygWpvyQLAniIh_kyRZEXsF8Vm-fQ&usqp=CAU'
 },

 {
 id: 23,
 name: 'Strawberry Shake',
 price: 90,
 image: 'https://ysm-res.cloudinary.com/image/upload/ar_5:3,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_500/v1/yale-medicine/live-prod/ym_new/strawberry%20shake_389650_5_v1.jpeg'
 },

 {
 id: 24,
 name: 'Shamrock Shake',
 price: 300,
 image: 'https://www.lemontreedwelling.com/wp-content/uploads/2017/03/Baileys-Shamrock-Shake-square-2-720x540.jpg'
 }
]);

const shakeHandler = () => {
  alert('Kindly fill the enquiry form at the bottom of the page');
}
console.log(shakeHandler);
    
  return (
    <div className='container'>
    {sstate.map(item =>(
    <main key = {item.id} className="food">
    <div>
    <img src={item.image} alt ={item.name} className='img' />
    </div>
    <div className='para'>
    <h3 onClick={shakeHandler}>{item.name}</h3>
    <p><FaRupeeSign />{item.price}</p>
    </div> 
    </main>
    ))}
    </div>
  ) 
  };

export default Shakes;
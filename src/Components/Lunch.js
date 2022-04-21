import React, {useState} from 'react';
import { FaRupeeSign } from 'react-icons/fa'

const Lunch = () =>  {
const [lstate, setLstate] = useState([
   {
 id: 11,
 name: 'Rajma Chawal',
 price: 60,
 image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/rajma-recipe-2-500x500.jpg'
 },

 {
 id: 12,
 name: 'Butter Chicken',
 price: 210,
 image: 'https://static.toiimg.com/thumb/53205522.cms?imgsize=302803&width=800&height=800'
 },

 {
 id: 13,
 name: 'North Thali',
 price: 160,
 image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/l2evavrm8f3hhl9aor7k'
 },

 {
 id: 14,
 name: 'South Thali',
 price: 260,
 image: 'https://opt.toiimg.com/recuperator/img/toi/m-61275880/61275880.jpg&width=500&resizemode=4'
 },
 
 {
 id: 15,
 name: 'Tandoori Chap',
 price: 90,
 image: 'https://spiderimg.amarujala.com/cdn-cgi/image/width=1600,height=900,fit=cover,f=auto/assets/images/2021/09/15/750x506/tandoori-soya-chaap_1631702105.jpeg'
 },

 {
 id: 16,
 name: 'Butter Naan',
 price: 10,
 image: 'https://woonheng.com/wp-content/uploads/2021/12/Vegan-Butter-Naan-8563-500x375.jpg'
 }
]);

const lunchHandler = () => {
alert('Kindly fill the enquiry form at the bottom of the page');
}
console.log(lunchHandler);

  return (
    <div className='container'>
    {lstate.map(item =>(
    <div key = {item.id} className="food">
    <div>
    <img src={item.image} alt ={item.name} className='img'/>
    </div>
    <div className='para'>
    <h3 onClick={lunchHandler}>{item.name}</h3>
    <p><FaRupeeSign />{item.price}</p> 
    </div>
    </div>
    ))}
    </div>
  );
}

export default Lunch;
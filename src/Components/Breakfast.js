import React, {useState} from 'react'
import { FaRupeeSign } from 'react-icons/fa'

const Breakfast = () => {
const [bstate, setBstate]=useState([
 {
 id: 25,
 name: 'Sweet Potato',
 price: 180,
 image:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1513281920%2Fsouthwestern-sweet-potato-and-egg-hash-1801-ck.jpg%3Fitok%3D4gExYXrM'
 },

 {
id: 1,
name: 'Mysore Dosa',
price: 80,
image: 'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg'       
 },

 {
 id: 2,
 name: 'Masala Dosa',
 price: 110,
 image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/10/9/DV3016_masala-dosa_s4x3.jpg.rend.hgtvcom.616.462.suffix/1570635680579.jpeg'
 },

 {
 id: 3,
 name: 'Schezwan Dosa',
 price: 90,
 image: 'https://www.tarladalal.com/members/9306/procstepimgs/schezuan-chopsuey-dosa-(7)-9-185439.jpg'
 },

 {
 id: 4,
 name:'Plain Dosa',
 price: 100,
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweabB_A099RhH0r_rEDH-x5QDsSLH5hXuGQ&usqp=CAU'
 },

 {
 id: 5,
 name: 'Rava Uttapam',
 price: 90,
 image: 'http://569471-1838595-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/12/FB-Thumnails-website-old-37.jpg'
 },

 {
 id: 6,
 name: 'Pancake Board',
 price: 90,
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0ByRALiJigdBL3M02VltLDEeFZB0_tuTIw&usqp=CAU'
 },

 {
 id: 7,
 name: 'Cheesy Burrito',
 price: 140,
 image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/22/0/CCHAP-110F_Breakfast-Burrito_s4x3.jpg.rend.hgtvcom.406.305.suffix/1382539589470.jpeg'
 },

 {
 id: 8,
 name: 'Omelette',
 price: 200,
 image: 'https://static.toiimg.com/thumb/54680309.cms?width=1200&height=900'
 },

 {
 id: 9,
 name: 'Samosa Two Pcs',
 price: 10,
 image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg'
 },
 
 {
 id: 10,
 name: 'Tea',
 price: 10,
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFa2mh2GuN0WztAk-EeCtAlQvOPV0vNk-eGQ&usqp=CAU'
 }
]);

const breakfastHandler = () => {
alert('Kindly fill the enquiry form at the bottom of the page');
};
console.log(breakfastHandler);

  return (
    <div className='container'>
    {bstate.map(item =>(
    <main key = {item.id} className="food">
    <div>
    <img src={item.image} alt ={item.name} className='img' />
    </div>
    <div className='para'>
    <h3 onClick={breakfastHandler}>{item.name}</h3>
    <p><FaRupeeSign />{item.price}</p> 
    </div>
    </main>
    ))}
    </div>

  );
}

export default Breakfast;
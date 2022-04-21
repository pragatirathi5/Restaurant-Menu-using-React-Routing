import React, { useState } from 'react';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { FaRupeeSign } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { FaGlassCheers } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import {  FaTwitterSquare } from 'react-icons/fa';

import All from './Components/All';
import Breakfast from './Components/Breakfast';
import Lunch from './Components/Lunch';
import Shakes from './Components/Shakes';
import Info from './Components/Info';

  const App = () => {
  const message = "Order Food Online or Enquire Now >"; 
  const[detail, setDetail] = useState(message);
  const detailHandler = () => {
  setDetail("Thank you for showing interest in us. We will get back to you soon.");
  }
  
  return (
  <div className='App'>
  <header className='header'>
  <img src="https://media.istockphoto.com/vectors/restaurant-food-drinks-logo-fork-knife-background-vector-image-vector-id981368726?k=20&m=981368726&s=612x612&w=0&h=Um4YOExWlUgOfpUs2spnN0NrrXs-M71OUuUMbStVFNQ=" />
  <h1>Our Menu <FaGlassCheers /></h1>
  <hr />
  </header>
  <nav className='navbar'>
        <Link to ="/Welcome" className='first' id='highfirst'>All</Link>
        <Link to="/Breakfast" className='second' id='highsecond'>Breakfast</Link>
        <Link to="/Lunch" className='third' id='highthird'>Lunch</Link>
        <Link to="/Shakes" className='fourth' id='highfourth'>Shakes</Link>
      </nav>
       <Routes>
        <Route exact path = "/Welcome" element = {<All />} />
        <Route path = "/Breakfast" element = {<Breakfast />} />
        <Route path = "/Lunch" element = {<Lunch />} />
        <Route path = "/Shakes" element = {<Shakes />} />
        </Routes>
        <div className='front'>
        <h4>TOP PICKS <FaArrowRight /></h4>
        <br />
        <img src="https://static.toiimg.com/thumb/54680309.cms?width=1200&height=900"/>
        <img src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/kgy9uildlqghi9vb7mqs" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcv5MYfzKwVljhmNg6SezmBbwZhO_JR96gQ&usqp=CAU"/>
        </div> 
        <br />
        <h5>OUR SERVICES <FaAngleRight /></h5>
        <img src="https://static.businessworld.in/article/article_extra_large_image/1606713895_pDBktJ_restaurant_industry.jpg" className='secondimage'/> 
        <img src="https://newwaveflooring.com.au/wp-content/uploads/2020/11/Kunstgras-restaurant-1024x550-899x483.jpg" className='secondimage'/> 
        <img src="https://previews.123rf.com/images/jrstock/jrstock1608/jrstock160800142/65588477-modern-dining-room-attached-to-outside-patio-area-with-a-garden-including-a-green-lawn-and-vase-the-.jpg" className='secondimage'/> 
        <img src="https://blog.ipleaders.in/wp-content/uploads/2019/11/foodmitho.jpg" className='secondimage'/> 
        <footer className='footer'>
          <p>{detail}</p>
          <p className='firstfooter'>Dining Out<br />  Lawn Dining <br /> Modern Dining Room <br /> Home Delivery</p>
          <input type='text'placeholder='Email' className='footerclass' name='Email'></input>
          <input type='text'placeholder='Phone Number' className='footerclass' name='Phone Number'></input>
          <button onClick={detailHandler}>Order Now</button>
          <p className='secondfooter'>Follow us on  <FaFacebookSquare /> <FaInstagramSquare /> <FaTwitterSquare /></p>
          <p className='thirdfooter'>Copyright 2022</p> 
        </footer>
  </div>

  );
}

export default App;
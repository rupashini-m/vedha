import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className='menu'>
        <ul>
         <li> <Link to="/">Home</Link></li>   
         <li> <Link to="/About">About</Link></li>   
         <li> <Link to="/Contact">Contact</Link></li> 
         <li> <Link to="/Blog">Blog</Link></li>  
         <li> <Link to="/Service">Service</Link></li>
        </ul>
    </div>
  )
}

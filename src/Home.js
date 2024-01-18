import React from 'react';
import vedha from './images/kk.jfif';
export default function Home() {
  return (
    <div className='hm'>
      <h1 >welcome to Quest </h1>
      <h4>grow you skill design your future</h4>
      <h5>Presenting the academy the tech school of the teacher.<br></br>We teach you the right
         skill you need for tommorow
      </h5>
      <button> explore courses</button>
      <button>Learn more</button>
      <img src={vedha} alt="" />
    
    </div>


  )
}

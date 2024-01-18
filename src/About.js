import React from 'react';
import dear from './images/download.jfif';
import dears from './images/mm.jfif';



export default function About() {
  return (
    <div >
        <h1>About us</h1>
        <h2>our vision</h2>
        <h3>A forward-facing statement of the very soul of your company that propels your content marketing.</h3>
      <h4>A mission statement defines the organizations business, its objectives, and how it will reach these objectives.<br></br>A vision statement details where the organization aspires to go.</h4>
    <h2>our mission</h2>
    <img src={dear} alt=""  id='gg'/>
    <img src={dears} alt="" />
    
    </div>
  )
}

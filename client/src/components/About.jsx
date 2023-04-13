import React, { useState } from 'react';

const About = () => {
  return (
    <div id="about" className="about-container">
      <p><span style={{color: 'gold'}}>WELCOME </span>TO MY SITE</p>
      <h1>Hi, I'm a Software Developer</h1>
      <div id="headshot" className="headshot-container">
        <p>I am a Front end software engineer. I enjoy crafting striking, efficient websites that allow users to easily interact with the application. I am ready for the next opportunity to build your website. </p>

        <img src="https://i.ibb.co/ZhRz946/Headshot-circular.png" alt="headshot"></img>

      </div>
    </div>
  );
};

export default About;
